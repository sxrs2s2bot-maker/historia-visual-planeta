#!/usr/bin/env python3
from __future__ import annotations

import json
import math
import random
import subprocess
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
OUT_ROOT = ROOT / 'assets' / 'generated'
GALLERY = OUT_ROOT / 'event-gallery'
GALLERY.mkdir(parents=True, exist_ok=True)

NODE = """
import { events } from './data.js';
console.log(JSON.stringify(events.map(({id,title,type,era,color,image,images}) => ({id,title,type,era,color,image,images}))));
"""

def load_events():
    result = subprocess.run(['node', '--input-type=module', '-e', NODE], cwd=ROOT, check=True, text=True, capture_output=True)
    return json.loads(result.stdout)

def hex_to_rgb(value: str):
    value = (value or '#7dd3fc').lstrip('#')
    if len(value) == 3:
        value = ''.join(ch * 2 for ch in value)
    return tuple(int(value[i:i+2], 16) for i in (0, 2, 4))

def mix(a, b, t):
    return tuple(int(a[i] * (1 - t) + b[i] * t) for i in range(3))

def gradient(size, c1, c2, vertical=True):
    w, h = size
    img = Image.new('RGB', size, c1)
    pix = img.load()
    if pix is None:
        raise RuntimeError('Pillow did not return a pixel accessor')
    denom = h - 1 if vertical else w - 1
    for y in range(h):
        for x in range(w):
            t = (y if vertical else x) / denom
            pix[x, y] = mix(c1, c2, t)
    return img

def starfield(draw, rng, w, h, n=120):
    for _ in range(n):
        x = rng.randrange(w)
        y = rng.randrange(h)
        r = rng.choice([1, 1, 1, 2])
        alpha = rng.randrange(90, 210)
        draw.ellipse((x-r, y-r, x+r, y+r), fill=(220, 245, 255, alpha))

def draw_mountains(draw, rng, w, h, color):
    base = int(h * rng.uniform(.58, .74))
    for layer in range(3):
        pts = [(0, h)]
        step = w // 6
        for x in range(-step, w + step, step):
            y = base - layer * 38 - rng.randrange(10, 90)
            pts.append((x, y))
        pts.append((w, h))
        draw.polygon(pts, fill=(*mix(color, (5, 10, 20), .55 + layer * .1), 210))

def draw_orbs(draw, rng, w, h, color):
    for _ in range(9):
        x = rng.randrange(-80, w)
        y = rng.randrange(-40, h)
        r = rng.randrange(30, 150)
        c = mix(color, (255, 255, 255), rng.uniform(.05, .4))
        draw.ellipse((x-r, y-r, x+r, y+r), fill=(*c, rng.randrange(18, 70)), outline=(*c, rng.randrange(60, 130)), width=rng.randrange(1, 4))

def draw_network(draw, rng, w, h, color):
    pts = [(rng.randrange(40, w-40), rng.randrange(40, h-40)) for _ in range(28)]
    for i, a in enumerate(pts):
        for b in pts[i+1:i+4]:
            if rng.random() < .45:
                draw.line((a, b), fill=(*mix(color, (180, 235, 255), .35), 80), width=2)
    for p in pts:
        r = rng.randrange(3, 8)
        draw.ellipse((p[0]-r, p[1]-r, p[0]+r, p[1]+r), fill=(*color, 155))

def draw_icon(draw, rng, w, h, event, variant, color):
    text = f"{event['title']} {event['type']} {event['era']}".lower()
    cx, cy = w // 2, h // 2
    line = (*mix(color, (255, 255, 255), .35), 205)
    fill = (*mix(color, (255, 221, 140), .18), 130)
    if any(k in text for k in ['microb', 'célula', 'adn', 'gen', 'crispr', 'bacteria', 'vida']):
        for i in range(6):
            y = cy - 150 + i * 60
            draw.arc((cx-220, y-30, cx+220, y+110), 0, 180, fill=line, width=5)
            draw.arc((cx-220, y-90, cx+220, y+50), 180, 360, fill=line, width=5)
            draw.line((cx-120, y+10, cx+120, y+10), fill=(*color, 120), width=3)
    elif any(k in text for k in ['dinosaur', 'mamífer', 'ave', 'ballena', 'animal', 'reptil', 'insect', 'abeja']):
        draw.ellipse((cx-170, cy-70, cx+120, cy+75), fill=fill, outline=line, width=5)
        draw.ellipse((cx+70, cy-115, cx+185, cy-20), fill=fill, outline=line, width=5)
        draw.line((cx-160, cy+70, cx-205, cy+155), fill=line, width=8)
        draw.line((cx-50, cy+70, cx-78, cy+155), fill=line, width=8)
        draw.line((cx-165, cy-35, cx-270, cy-80), fill=line, width=9)
    elif any(k in text for k in ['ciudad', 'estado', 'urb', 'pirámide', 'ingeniería', 'acueduct', 'granero', 'ley']):
        for i in range(5):
            x = cx - 250 + i * 115
            top = cy + rng.randrange(-125, 40)
            draw.rectangle((x, top, x+78, cy+165), fill=fill, outline=line, width=3)
            for wy in range(top + 18, cy+140, 34):
                draw.rectangle((x+16, wy, x+32, wy+18), fill=(*mix(color, (255,255,255), .55), 100))
        draw.arc((cx-330, cy+40, cx+330, cy+235), 180, 360, fill=line, width=7)
    elif any(k in text for k in ['naveg', 'barco', 'sahul', 'costa', 'océano', 'mar', 'agua', 'riego']):
        for yy in [cy+75, cy+115, cy+155]:
            draw.arc((cx-360, yy-45, cx-80, yy+45), 0, 180, fill=(*color, 150), width=5)
            draw.arc((cx-40, yy-45, cx+260, yy+45), 0, 180, fill=(*color, 150), width=5)
        draw.polygon([(cx-190, cy+50), (cx+210, cy+50), (cx+125, cy+130), (cx-110, cy+130)], fill=fill, outline=line)
        draw.line((cx, cy+50, cx, cy-170), fill=line, width=6)
        draw.polygon([(cx+8, cy-160), (cx+8, cy+35), (cx+155, cy+28)], fill=(*mix(color, (255,255,255), .25), 120), outline=line)
    elif any(k in text for k in ['digital', 'internet', 'comput', 'chip', 'ia', 'transistor', 'gps', 'smartphone']):
        draw.rounded_rectangle((cx-215, cy-145, cx+215, cy+145), radius=30, fill=fill, outline=line, width=5)
        for i in range(9):
            x = cx-250+i*62
            draw.line((x, cy-190, x, cy-145), fill=line, width=4)
            draw.line((x, cy+145, x, cy+190), fill=line, width=4)
        draw_network(draw, rng, w, h, color)
    elif any(k in text for k in ['fuego', 'industr', 'vapor', 'carbón', 'plástico', 'energía', 'nuclear']):
        for i in range(5):
            x = cx - 220 + i * 105
            draw.rectangle((x, cy+35-rng.randrange(0,90), x+60, cy+165), fill=fill, outline=line, width=3)
            draw.ellipse((x-20, cy-120-rng.randrange(0,80), x+80, cy-20), fill=(*mix(color, (70,70,70), .45), 55))
        draw.arc((cx-260, cy-215, cx+260, cy+185), 200, 340, fill=line, width=6)
    else:
        draw_orbs(draw, rng, w, h, color)
        draw_mountains(draw, rng, w, h, color)

def make_image(event, variant, path):
    color = hex_to_rgb(event.get('color'))
    seed = hash((event['id'], variant)) & 0xffffffff
    rng = random.Random(seed)
    w, h = 1280, 800
    bg1 = mix(color, (2, 6, 23), .72)
    bg2 = mix(color, (0, 0, 0), .48)
    img = gradient((w, h), bg1, bg2, vertical=variant != 'symbol').convert('RGBA')
    draw = ImageDraw.Draw(img, 'RGBA')
    starfield(draw, rng, w, h, 80 if variant != 'detail' else 35)
    for _ in range(5):
        x, y = rng.randrange(-200, w), rng.randrange(-120, h)
        r = rng.randrange(110, 340)
        draw.ellipse((x-r, y-r, x+r, y+r), fill=(*mix(color, (255, 255, 255), rng.random()*.25), rng.randrange(12, 45)))
    if variant == 'detail':
        draw_network(draw, rng, w, h, color)
    elif variant == 'symbol':
        draw_orbs(draw, rng, w, h, color)
    else:
        draw_mountains(draw, rng, w, h, color)
    draw_icon(draw, rng, w, h, event, variant, color)
    # Vignette and subtle grain
    vignette = Image.new('L', (w, h), 0)
    vd = ImageDraw.Draw(vignette)
    vd.ellipse((-220, -120, w+220, h+180), fill=220)
    vignette = vignette.filter(ImageFilter.GaussianBlur(90))
    dark = Image.new('RGBA', (w, h), (0, 0, 0, 115))
    img = Image.composite(img, Image.alpha_composite(img, dark), vignette)
    img = img.convert('RGB')
    path.parent.mkdir(parents=True, exist_ok=True)
    img.save(path, 'WEBP', quality=84, method=6)

def main():
    events = load_events()
    made = 0
    for event in events:
        # Generate any missing primary event image, including the new 23-62 assets.
        primary = ROOT / event['image']
        if not primary.exists() or primary.stat().st_size < 1000:
            make_image(event, 'scene', primary)
            made += 1
        for src in event['images'][1:]:
            target = ROOT / src
            variant = target.stem.rsplit('-', 1)[-1]
            if not target.exists() or target.stat().st_size < 1000:
                make_image(event, variant, target)
                made += 1
    print(f'events={len(events)} generated_or_refreshed={made}')

if __name__ == '__main__':
    main()
