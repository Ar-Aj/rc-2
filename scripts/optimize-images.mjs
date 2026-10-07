/**
 * Responsive image pipeline.
 *
 *   media-src/**  ──sharp──▶  public/media/**-{w}.webp   (+ src/data/media.generated.ts)
 *
 * Every source image becomes a set of WebP renditions plus a tiny blurred
 * placeholder and intrinsic dimensions, so <Img> can render a srcset with
 * zero layout shift. Also emits favicons and Open Graph cards.
 *
 *   npm run images
 */
import { readdir, mkdir, rm, writeFile, stat } from 'node:fs/promises'
import { join, relative, dirname, extname, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const SRC = join(ROOT, 'media-src')
const OUT = join(ROOT, 'public', 'media')
const MANIFEST = join(ROOT, 'src', 'data', 'media.generated.ts')
const WIDTHS = [480, 960, 1600, 2400]
const QUALITY = 74

async function walk(dir) {
  const out = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name)
    if (entry.isDirectory()) out.push(...(await walk(p)))
    else if (/\.(png|jpe?g|webp)$/i.test(entry.name)) out.push(p)
  }
  return out
}

const toKey = (file) => relative(SRC, file).split(sep).join('/').replace(extname(file), '')

async function processImage(file) {
  const key = toKey(file)
  const img = sharp(file, { failOn: 'none' }).rotate()
  const meta = await img.metadata()
  const width = meta.width ?? 0
  const height = meta.height ?? 0
  const targets = WIDTHS.filter((w) => w < width)
  targets.push(Math.min(width, 2400))
  const unique = [...new Set(targets)].sort((a, b) => a - b)

  await mkdir(join(OUT, dirname(key)), { recursive: true })
  const srcs = []
  for (const w of unique) {
    const name = `${key}-${w}.webp`
    await sharp(file, { failOn: 'none' })
      .rotate()
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 5, smartSubsample: true })
      .toFile(join(OUT, name))
    srcs.push({ w, src: `/media/${name}` })
  }
  const lqipBuf = await sharp(file, { failOn: 'none' })
    .rotate()
    .resize({ width: 24 })
    .blur(1.2)
    .webp({ quality: 40 })
    .toBuffer()
  const outH = Math.round((height / width) * Math.min(width, 2400))
  return {
    key,
    width: Math.min(width, 2400),
    height: outH,
    srcs,
    lqip: `data:image/webp;base64,${lqipBuf.toString('base64')}`,
  }
}

async function icons() {
  // Brick-house mark lives in the top 40% of the cream logo.
  const logo = join(SRC, 'brand', 'logo-cream.png')
  const mark = await sharp(logo).extract({ left: 320, top: 160, width: 400, height: 260 }).toBuffer()
  const brown = { r: 59, g: 33, b: 22, alpha: 1 }
  for (const size of [32, 180, 192, 512]) {
    const inner = Math.round(size * 0.72)
    const icon = await sharp(mark).resize({ width: inner, height: inner, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer()
    const name = size === 180 ? 'apple-touch-icon.png' : `icon-${size}.png`
    await sharp({ create: { width: size, height: size, channels: 4, background: brown } })
      .composite([{ input: icon, gravity: 'center' }])
      .png()
      .toFile(join(ROOT, 'public', name))
  }
  // Wordmark for nav/footer (cream, transparent) — trimmed + webp
  await sharp(logo).trim().resize({ width: 640 }).webp({ quality: 90 }).toFile(join(OUT, 'brand', 'logo-cream-trim.webp'))
}

const OG = {
  default: 'projects/rapid-heights/tower',
  legacy: 'leadership/anwar-abbajumma',
  'rapid-residency-phase-4': 'projects/residency-phase-4/elevation-day',
  'rapid-residency-phase-3': 'projects/residency-phase-3/k-wing-twilight',
  'maimoon-tower': 'projects/maimoon-tower/elevation',
  'rapid-heights': 'projects/rapid-heights/tower',
  'hotel-elegant': 'projects/hotel-elegant/night',
  'rapid-jewel': 'projects/rapid-jewel/street',
  'rapid-royal': 'projects/rapid-royal/forecourt',
  'rapid-residency': 'projects/rapid-residency/township-aerial',
  gallery: 'projects/rapid-residency/phase-2-aerial',
}

async function ogCards(files) {
  await mkdir(join(ROOT, 'public', 'og'), { recursive: true })
  for (const [slug, key] of Object.entries(OG)) {
    const file = files.find((f) => toKey(f) === key)
    if (!file) continue
    await sharp(file, { failOn: 'none' })
      .rotate()
      .resize({ width: 1200, height: 630, fit: 'cover', position: 'attention' })
      .modulate({ brightness: 0.92 })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(join(ROOT, 'public', 'og', `${slug}.jpg`))
  }
}

async function main() {
  const t = Date.now()
  await rm(OUT, { recursive: true, force: true })
  await mkdir(OUT, { recursive: true })
  const files = await walk(SRC)
  const entries = []
  for (const f of files) {
    entries.push(await processImage(f))
    process.stdout.write('.')
  }
  await mkdir(join(OUT, 'brand'), { recursive: true })
  await icons()
  await ogCards(files)

  entries.sort((a, b) => a.key.localeCompare(b.key))
  const body = entries
    .map((e) => `  ${JSON.stringify(e.key)}: ${JSON.stringify({ width: e.width, height: e.height, srcs: e.srcs, lqip: e.lqip })},`)
    .join('\n')
  await writeFile(
    MANIFEST,
    `/* eslint-disable */\n// AUTO-GENERATED by scripts/optimize-images.mjs — do not edit by hand.\nimport type { MediaAsset } from './media.types'\n\nexport const media = {\n${body}\n} as const satisfies Record<string, MediaAsset>\n\nexport type MediaKey = keyof typeof media\n`,
  )
  let bytes = 0
  for (const e of entries) for (const s of e.srcs) bytes += (await stat(join(ROOT, 'public', s.src))).size
  console.log(`\n${entries.length} images → ${(bytes / 1024 / 1024).toFixed(1)} MB of WebP in ${((Date.now() - t) / 1000).toFixed(1)}s`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
