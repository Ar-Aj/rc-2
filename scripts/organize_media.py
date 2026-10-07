"""
One-time media organiser for Rapid Construction.

Pulls every usable real asset out of the two client PDFs and the local image
folders into a clean, per-project tree under /media-src. The sharp pipeline
(scripts/optimize-images.mjs) then turns /media-src into responsive WebP in
/public/media.

Run from repo root:  python scripts/organize_media.py
"""
import os
import shutil

import fitz  # PyMuPDF
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUB = os.path.join(ROOT, "public")
IMG = os.path.join(PUB, "Images")
OUT = os.path.join(ROOT, "media-src")
PORTFOLIO = os.path.join(PUB, "pdf", "Rapid Construction Portfolio (2).pdf")
PHASE4 = os.path.join(PUB, "pdf", "Phase 4 Proposal Rapid Construction..pdf")


def ensure(path):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    return path


def copy_local(rel, dest):
    src = os.path.join(IMG, rel)
    if not os.path.exists(src):
        print("  ! missing", rel)
        return
    shutil.copy2(src, ensure(os.path.join(OUT, dest)))


def pdf_images(doc, page_no):
    """Return list of (xref, w, h, smask) for a 1-based page number."""
    page = doc[page_no - 1]
    res = []
    for img in page.get_images(full=True):
        xref, smask, w, h = img[0], img[1], img[2], img[3]
        res.append((xref, w, h, smask))
    return res


def save_pdf_image(doc, page_no, dest, pick=lambda imgs: max(imgs, key=lambda i: i[1] * i[2]), alpha=False):
    imgs = [i for i in pdf_images(doc, page_no) if i[1] >= 300 and i[2] >= 300]
    # Skip the full-page background textures that both PDFs repeat on every page.
    imgs = [i for i in imgs if (i[1], i[2]) != (993, 1404)]
    if not imgs:
        print("  ! no image on page", page_no)
        return
    xref, w, h, smask = pick(imgs)
    pix = fitz.Pixmap(doc, xref)
    if alpha and smask:
        pix = fitz.Pixmap(pix, fitz.Pixmap(doc, smask))
    if pix.n - pix.alpha >= 4:  # CMYK -> RGB
        pix = fitz.Pixmap(fitz.csRGB, pix)
    path = ensure(os.path.join(OUT, dest))
    pix.save(path)
    print("  +", dest, f"{w}x{h}")


def by_size(w, h):
    return lambda imgs: next(i for i in imgs if (i[1], i[2]) == (w, h))


def portrait_on_backdrop(src_png, dest, backdrop=(233, 225, 212)):
    """Composite an RGBA leadership cut-out onto a uniform warm-stone studio backdrop."""
    im = Image.open(src_png).convert("RGBA")
    bbox = im.getchannel("A").point(lambda a: 255 if a > 24 else 0).getbbox()
    if bbox:
        im = im.crop(bbox)
    # Full-length cut-outs → three-quarter length so every portrait shares one scale.
    if im.height / im.width > 1.7:
        im = im.crop((0, 0, im.width, int(im.width * 1.55)))
    W = int(im.width * 1.35)
    H = int(W * 1.25)
    if H < im.height * 1.08:
        H = int(im.height * 1.08)
        W = int(H / 1.25)
    canvas = Image.new("RGBA", (W, H), backdrop + (255,))
    x = (W - im.width) // 2
    y = H - im.height
    canvas.alpha_composite(im, (x, y))
    canvas.convert("RGB").save(ensure(os.path.join(OUT, dest)), quality=95)
    print("  + portrait", dest)


def main():
    if os.path.exists(OUT):
        shutil.rmtree(OUT)
    print("Local folders")
    # Brand
    copy_local("rc-logo-withour-background.png", "brand/logo-cream.png")
    copy_local("brochure template rapid construction.jpeg", "brand/brochure-2024.jpeg")
    copy_local("Rapid Heights(Pydhonie)/Rapid Heights Logo.jpeg", "brand/logo-rapid-heights.jpeg")
    copy_local("Rapid Jewel(Khopoli)/Rapid Jewel Logo.jpeg", "brand/logo-rapid-jewel.jpeg")
    copy_local("Strikers Resort(Rapid Royal)/Rapid Royal(Strikers).jpeg", "brand/logo-rapid-royal.jpeg")
    copy_local("Rapid Residency(Neral, Near Matheran)/Rapid Residency Phase 3 Logo.jpeg", "brand/logo-residency-phase-3.jpeg")
    copy_local("Rapid Residency(Neral, Near Matheran)/Phase 2 logo.jpeg", "brand/logo-residency-phase-2.jpeg")
    copy_local("Rapid Residency(Neral, Near Matheran)/WhatsApp Image 2024-08-26 at 12.52.42 PM.jpeg", "brand/logo-residency-neral.jpeg")
    copy_local("Rapid Residency(Neral, Near Matheran)/logo and contact number.jpeg", "brand/residency-stalls-banner.jpeg")
    copy_local("Rapid Residency(Neral, Near Matheran)/rapid residency phase 2 buy offers 51k loan intrest free.jpeg", "brand/offer-phase-2-a.jpeg")
    copy_local("Rapid Residency(Neral, Near Matheran)/rapid residency phase 2 buy offers 51k loan intrest free (2).jpeg", "brand/offer-phase-2-b.jpeg")
    copy_local("Rapid Residency(Neral, Near Matheran)/rapid residency phase 2 buy offers 51k loan intrest free (3).jpeg", "brand/offer-phase-2-c.jpeg")
    # Projects — real photography
    copy_local("Hotel Elegant/Hotel Elegant.png", "projects/hotel-elegant/night.png")
    copy_local("Maimoon Tower(near Byculla)/maimoon tower.jpeg", "projects/maimoon-tower/elevation.jpeg")
    copy_local("Rapid Heights(Pydhonie)/Rapid Height.jpeg", "projects/rapid-heights/sky.jpeg")
    copy_local("Rapid Jewel(Khopoli)/Rapid Jewel.png", "projects/rapid-jewel/street.png")
    copy_local("Strikers Resort(Rapid Royal)/Stikers.png", "projects/rapid-royal/forecourt.png")
    copy_local("Rapid Residency(Neral, Near Matheran)/Phase 1.png", "projects/rapid-residency/phase-1-aerial.png")
    copy_local("Rapid Residency(Neral, Near Matheran)/Phase 2.1.png", "projects/rapid-residency/phase-2-aerial.png")
    copy_local("Rapid Residency(Neral, Near Matheran)/BottomLeft Phase 2- Top right center Phase 3.jpeg", "projects/rapid-residency/township-aerial.jpeg")
    copy_local("Rapid Residency(Neral, Near Matheran)/Phase 3 k wing (3).png", "projects/residency-phase-3/k-wing-twilight.png")

    print("Portfolio PDF")
    doc = fitz.open(PORTFOLIO)
    save_pdf_image(doc, 1, "interiors/open-kitchen-living.png", by_size(1920, 1100))
    save_pdf_image(doc, 1, "interiors/contemporary-villa.jpeg", by_size(2000, 1335))
    save_pdf_image(doc, 2, "interiors/sunlit-living.png", by_size(1600, 1066))
    save_pdf_image(doc, 5, "projects/amin-building/sketch.jpeg")
    save_pdf_image(doc, 6, "projects/abbajumma-mansion/facade.png")
    save_pdf_image(doc, 7, "projects/sk-mansion/illustration.jpeg")
    save_pdf_image(doc, 8, "projects/haji-building/sketch.jpeg")
    save_pdf_image(doc, 9, "projects/shoppers-point/sv-road.jpeg")
    save_pdf_image(doc, 10, "projects/galaxy-apartment/sketch.jpeg")
    save_pdf_image(doc, 11, "projects/best-complex/sketch.jpeg")
    save_pdf_image(doc, 12, "projects/rapid-heights/tower.jpeg")
    save_pdf_image(doc, 13, "projects/rapid-jewel/elevation.jpeg")
    save_pdf_image(doc, 14, "projects/rapid-royal/entrance.jpeg")
    save_pdf_image(doc, 17, "projects/residency-phase-3/completed-wing.jpeg")
    save_pdf_image(doc, 18, "projects/hotel-elegant/day.jpeg")
    save_pdf_image(doc, 19, "projects/maimoon-tower/render.jpeg")
    save_pdf_image(doc, 21, "interiors/balcony-facade.jpeg", by_size(1650, 1100))
    save_pdf_image(doc, 21, "construction/skyline-cranes.jpeg", by_size(1728, 1152))
    save_pdf_image(doc, 23, "interiors/city-view-living.jpeg")
    save_pdf_image(doc, 24, "interiors/dining.jpeg", by_size(1400, 700))

    # Leadership cut-outs (with their alpha masks) → uniform studio backdrop
    tmp = os.path.join(OUT, "_tmp")
    os.makedirs(tmp, exist_ok=True)
    page2 = [i for i in pdf_images(doc, 2) if (i[1], i[2]) == (1191, 3072)]
    if page2:
        xref, w, h, smask = page2[0]
        pix = fitz.Pixmap(fitz.Pixmap(doc, xref), fitz.Pixmap(doc, smask)) if smask else fitz.Pixmap(doc, xref)
        pix.save(os.path.join(tmp, "anwar.png"))
        portrait_on_backdrop(os.path.join(tmp, "anwar.png"), "leadership/anwar-abbajumma.jpg")
    page3 = pdf_images(doc, 3)
    print("  page 3 images:", [(w, h, bool(s)) for _, w, h, s in page3])
    names = {
        0: "aslam-abbajumma",
        1: "khurram-abbajumma",
    }
    # Order on the page: Aslam (600x800), Khurram (600x800), Ahmed (smaller), Mohammed Ali (822x1096)
    portraits = [i for i in page3 if i[1] >= 150 and i[2] >= 200 and (i[1], i[2]) != (993, 1404)]
    labelled = []
    six = [i for i in portraits if (i[1], i[2]) == (600, 800)]
    if len(six) >= 2:
        labelled += [(six[0], names[0]), (six[1], names[1])]
    big = [i for i in portraits if (i[1], i[2]) == (822, 1096)]
    if big:
        labelled.append((big[0], "mohammed-ali-abbajumma"))
    rest = [i for i in portraits if (i[1], i[2]) not in ((600, 800), (822, 1096))]
    rest = [i for i in rest if i[2] > i[1]]  # portrait orientation only (Ahmed)
    if rest:
        labelled.append((max(rest, key=lambda i: i[1] * i[2]), "ahmed-abbajumma"))
    for (xref, w, h, smask), slug in labelled:
        pix = fitz.Pixmap(doc, xref)
        if smask:
            pix = fitz.Pixmap(pix, fitz.Pixmap(doc, smask))
        p = os.path.join(tmp, slug + ".png")
        pix.save(p)
        portrait_on_backdrop(p, f"leadership/{slug}.jpg")
    shutil.rmtree(tmp)

    print("Phase IV PDF")
    d4 = fitz.open(PHASE4)
    save_pdf_image(d4, 2, "projects/residency-phase-4/elevation-day.jpeg", by_size(1280, 860))
    save_pdf_image(d4, 3, "projects/residency-phase-4/elevation-night.jpeg", by_size(922, 922))
    save_pdf_image(d4, 4, "projects/residency-phase-4/location-micro.jpeg", by_size(720, 878))
    save_pdf_image(d4, 7, "projects/residency-phase-4/approved-plan.jpeg", by_size(1383, 922))
    save_pdf_image(d4, 8, "projects/residency-phase-4/plan-1bhk.png", by_size(1076, 717))
    save_pdf_image(d4, 9, "projects/residency-phase-4/plan-1bhk-3d.png", by_size(1135, 907))
    save_pdf_image(d4, 10, "projects/residency-phase-4/plan-2bhk.png", by_size(1076, 717))
    save_pdf_image(d4, 11, "projects/residency-phase-4/plan-2bhk-3d.png", by_size(1073, 880))
    save_pdf_image(d4, 12, "projects/residency-phase-4/entrance-lobby.jpeg", by_size(1500, 1000))
    save_pdf_image(d4, 13, "projects/residency-phase-4/entrance-gate.jpeg", by_size(1403, 1050))
    save_pdf_image(d4, 14, "interiors/living-niche.jpeg", by_size(1628, 1080))
    save_pdf_image(d4, 14, "interiors/heritage-living.jpeg", by_size(1957, 1305))
    save_pdf_image(d4, 15, "interiors/kitchen.jpeg", by_size(1706, 1097))
    save_pdf_image(d4, 15, "interiors/bath.jpeg", by_size(1728, 1152))
    save_pdf_image(d4, 17, "projects/residency-phase-4/fitness-centre.jpeg", by_size(973, 900))
    save_pdf_image(d4, 18, "projects/residency-phase-4/kids-play.jpeg", by_size(1604, 1001))
    save_pdf_image(d4, 19, "projects/residency-phase-4/garden-seating.jpeg", by_size(1210, 1613))
    print("done ->", OUT)


if __name__ == "__main__":
    main()
