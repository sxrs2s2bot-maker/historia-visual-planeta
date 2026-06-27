#!/usr/bin/env python3
from pathlib import Path
import shutil
import sys

sys.path.insert(0, '/root/.hermes/hermes-agent')
sys.path.insert(0, '/root/.hermes/hermes-agent/plugins/image_gen/openai-codex')
from importlib import import_module

try:
    from PIL import Image
except Exception as exc:
    raise SystemExit(f'Pillow required for WebP conversion: {exc}')

mod = import_module('__init__')
provider = mod.OpenAICodexImageGenProvider()
if not provider.is_available():
    raise SystemExit('OpenAI Codex image provider is not available')

OUT = Path('/root/projects/historia-visual-planeta/assets/generated')
OUT.mkdir(parents=True, exist_ok=True)
BASE = 'Museum-quality educational illustration, no text, no labels, no watermark. Cinematic science museum style, dynamic composition, coherent palette with deep blues, warm amber highlights, realistic but painterly, 16:9 landscape.'
PROMPTS = [
    ('11-human-rock-shelter.webp', 'Late Pleistocene humans in a firelit rock shelter preparing ochre pigment, bone needles and stone tools visible, intimate archaeological scene. ' + BASE),
    ('12-coastal-migration.webp', 'Ancient humans moving along a rugged Ice Age coastline at dawn, shellfish gathering, simple watercraft in distance, migration and coastal ecology. ' + BASE),
    ('13-ice-age-camp.webp', 'Ice Age winter camp with mammoth-bone dwelling, stitched hides, hearth smoke, people repairing clothing under aurora-like cold sky. ' + BASE),
    ('14-neolithic-ritual.webp', 'Early Neolithic ritual gathering with monumental stone pillars, people carrying baskets and carved animal symbols, sunrise, no readable inscriptions. ' + BASE),
    ('15-early-agriculture.webp', 'Early farmers harvesting cereals with sickles, goats and sheep near small mudbrick houses, irrigation ditch and seed baskets. ' + BASE),
    ('16-ancient-city-irrigation.webp', 'Ancient river city with canals, wells, drainage channels, fields and workers maintaining irrigation infrastructure, broad aerial perspective. ' + BASE),
    ('17-writing-symbols.webp', 'Ancient scribe pressing signs into clay tablets beside tokens, grain jars and seal impressions, administrative birth of writing, no readable text. ' + BASE),
    ('18-ancient-engineering.webp', 'Ancient engineering montage: stone blocks, ramps, aqueduct arch, bronze tools and survey ropes, workers coordinating construction, historically plausible. ' + BASE),
    ('19-knowledge-routes.webp', 'Medieval knowledge exchange across libraries, paper sheets, scholars, caravan route and observatory instruments, Afro-Eurasian cultural transmission. ' + BASE),
    ('20-sailing-navigation.webp', 'Pre-modern ocean navigation with wooden sailing vessel, compass, starry sky, portolan-style map shapes without text, dramatic sea horizon. ' + BASE),
    ('21-industrial-engine.webp', 'Early industrial steam engine in a brick workshop, gears, pistons, coal, workers and warm steam, powerful but not dystopian. ' + BASE),
    ('22-digital-earth.webp', 'Digital Earth seen from orbit with satellites, circuit patterns, DNA helix and neural network lights subtly integrated, modern technology and planet. ' + BASE),
]

for filename, prompt in PROMPTS:
    target = OUT / filename
    if target.exists() and target.stat().st_size > 1000:
        print(f'skip existing {filename}')
        continue
    print(f'generating {filename}', flush=True)
    result = provider.generate(prompt, aspect_ratio='landscape')
    if not result.get('success'):
        raise RuntimeError(f'failed {filename}: {result}')
    src = Path(result['image'])
    with Image.open(src) as im:
        im = im.convert('RGB')
        im.thumbnail((1200, 800))
        im.save(target, 'WEBP', quality=84, method=6)
    print(f'wrote {target} ({target.stat().st_size} bytes)', flush=True)
print('done')
