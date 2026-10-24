"""Fetch the chosen Google Fonts and their OFL licenses for local serving."""
from pathlib import Path
import re
import urllib.request

ROOT = Path(__file__).resolve().parents[1]
DEST = ROOT / 'public/fonts'
URL = 'https://fonts.googleapis.com/css2?family=Manrope:wght@400..800&display=swap'
AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'


def fetch(url):
    return urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': AGENT})).read()


if __name__ == '__main__':
    DEST.mkdir(parents=True, exist_ok=True)
    css = fetch(URL).decode()
    faces = re.findall(r'/\* latin \*/\s*(@font-face\s*\{[^}]+\})', css)
    if not faces:
        faces = re.findall(r'@font-face\s*\{[^}]+\}', css)
    output = []
    for index, face in enumerate(faces):
        remote = re.search(r'url\(([^)]+)\)', face).group(1)
        name = f"manrope-normal-2.{remote.rsplit('.', 1)[-1]}"
        (DEST / name).write_bytes(fetch(remote))
        output.append(face.replace(remote, f'/fonts/{name}'))
    (ROOT / 'src/styles/fonts.css').write_text('\n'.join(output), encoding='utf-8')
    for family in ['manrope']:
        (DEST / f'{family}-OFL.txt').write_bytes(fetch(f'https://raw.githubusercontent.com/google/fonts/main/ofl/{family}/OFL.txt'))
    print(f'Self-hosted {len(faces)} font faces with licenses.')
