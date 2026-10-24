"""Create appropriately sized WebP derivatives; preserve all source assets."""
from pathlib import Path
import json
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]


def export(source, destination, maximum, quality=86):
    destination.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(source) as image:
        image.thumbnail((maximum, maximum), Image.Resampling.LANCZOS)
        image.save(destination, 'WEBP', quality=quality, method=6)
    provenance = f'Existing owner-provided portfolio asset: {source.relative_to(ROOT).as_posix()}. Resized within {maximum}px and encoded as WebP at quality {quality}; no generated imagery.'
    destination.with_suffix(destination.suffix + '.json').write_text(json.dumps({'prompt': provenance}, indent=2), encoding='utf-8')


if __name__ == '__main__':
    for folder, maximum in [('logos', 160), ('certs', 2000)]:
        for source in (ROOT / 'src/assets' / folder).glob('*.png'):
            export(source, ROOT / 'src/assets/optimized' / folder / f'{source.stem}.webp', maximum, 90)
    source = ROOT / 'src/assets/images/profile-light-v2.png'
    export(source, ROOT / 'src/assets/optimized/portrait.webp', 760, 88)
    export(source, ROOT / 'src/assets/optimized/avatar.webp', 100, 85)
    for source in (ROOT / 'public/assets/projects').glob('*.png'):
        source.with_suffix(source.suffix + '.json').write_text(json.dumps({'prompt': f'Existing owner-provided portfolio screenshot from {source.relative_to(ROOT).as_posix()}; preserved original project imagery.'}, indent=2), encoding='utf-8')
        for maximum in (720, 1440):
            export(source, source.parent / 'optimized' / f'{source.stem}-{maximum}.webp', maximum, 87)
    print('Generated optimized portraits, logos, certificates, and project screenshots.')
