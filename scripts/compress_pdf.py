"""Recompress oversized embedded images in a PDF (fallback for MuPDF rewrite_images crashes)."""
import io
import os
import sys

import fitz
from PIL import Image

src, dst = sys.argv[1], sys.argv[2]
doc = fitz.open(src)
done = set()
for page in doc:
    for img in page.get_images(full=True):
        xref, smask = img[0], img[1]
        if xref in done or smask:
            continue
        done.add(xref)
        try:
            info = doc.extract_image(xref)
        except Exception:
            continue
        if len(info["image"]) < 250_000:
            continue
        try:
            im = Image.open(io.BytesIO(info["image"])).convert("RGB")
        except Exception:
            continue
        im.thumbnail((1800, 1800))
        buf = io.BytesIO()
        im.save(buf, "JPEG", quality=74, optimize=True, progressive=True)
        if buf.tell() < len(info["image"]):
            page.replace_image(xref, stream=buf.getvalue())
doc.set_metadata({"title": "Rapid Residency Phase IV - Brochure", "author": "Rapid Construction"})
doc.save(dst, garbage=4, deflate=True)
print(round(os.path.getsize(dst) / 1e6, 1), "MB")
