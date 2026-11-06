"""Nusavaniid B2B export catalog — matches the current site design."""
import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.utils import simpleSplit
from PIL import Image

FD = 'C:/Users/dimas/AppData/Local/Temp/nusavaniid-pdfgen/fonts'
pdfmetrics.registerFont(TTFont('Playfair', FD + '/PlayfairDisplay-700.ttf'))
pdfmetrics.registerFont(TTFont('Playfair-I', FD + '/PlayfairDisplay-600-Italic.ttf'))
pdfmetrics.registerFont(TTFont('Manrope', FD + '/Manrope-400.ttf'))
pdfmetrics.registerFont(TTFont('Manrope-SB', FD + '/Manrope-600.ttf'))
pdfmetrics.registerFont(TTFont('Manrope-B', FD + '/Manrope-700.ttf'))

CREAM = HexColor('#FAF7F2'); POD = HexColor('#1E110A'); GOLD = HexColor('#C59B27')
GOLD_BRIGHT = HexColor('#D9AD3D'); GOLD_DEEP = HexColor('#A37C16'); SAND = HexColor('#EFE6D7')
SOFT = HexColor('#4A3B31'); MUTED = HexColor('#8A7A6B'); LINE = HexColor('#E9E1D4')
GLASS = HexColor('#FCFAF6')

W, H = A4
M = 40
OUT = 'D:/Dimas/VANILA PROJEK/nusavaniid-deploy/nusavaniid-catalog.pdf'
BASE = 'D:/Dimas/VANILA PROJEK/nusavaniid-deploy/'
LOGO = 'C:/Users/dimas/AppData/Local/Temp/nusavaniid-pdfgen/logo-site.png'

c = canvas.Canvas(OUT, pagesize=A4)
c.setTitle('Nusavaniid — B2B Export Catalog')
c.setAuthor('Nusavaniid')

c.setFillColor(CREAM); c.rect(0, 0, W, H, stroke=0, fill=1)
c.setFillColor(SAND); c.setFillAlpha(0.5); c.circle(-20, H - 30, 170, stroke=0, fill=1)
c.setFillColor(GOLD); c.setFillAlpha(0.07); c.circle(W + 10, H - 420, 190, stroke=0, fill=1)
c.setFillAlpha(1)


def wrap(text, font, size, width):
    return simpleSplit(text, font, size, width)


def pill(x, y, text, font, size, fg, bg, padx=10, pady=4):
    tw = pdfmetrics.stringWidth(text, font, size)
    w, h = tw + padx * 2, size + pady * 2
    c.setFillColor(bg); c.setStrokeColor(bg)
    c.roundRect(x, y - h + 3, w, h, h / 2, stroke=0, fill=1)
    c.setFillColor(fg); c.setFont(font, size)
    c.drawString(x + padx, y - h + pady + 2.5, text)
    return w


# header: site logo (SVG-traced PNG 480x150, ratio 3.2) at display 144x45
c.drawImage(LOGO, M, H - 16 - 45, width=144, height=45, mask='auto')

c.setFillColor(GOLD); c.setFont('Manrope-B', 8)
c.drawRightString(W - M, H - 34, 'EXPORT CATALOG · 2026')
c.setFillColor(MUTED); c.setFont('Manrope', 8)
c.drawRightString(W - M, H - 46, 'nusavaniid.com')
c.setStrokeColor(LINE); c.setLineWidth(0.8)
c.line(M, H - 80, W - M, H - 80)

y = H - 100
c.setFillColor(GOLD_DEEP); c.setFont('Manrope-B', 8)
c.drawString(M + 16, y, 'B2B EXPORT CATALOG')
c.setFillColor(GOLD); c.rect(M, y - 2.5, 14, 1.6, stroke=0, fill=1)
c.setFillColor(GOLD); c.rect(M + 178, y - 2.5, 14, 1.6, stroke=0, fill=1)

y -= 30
c.setFillColor(POD); c.setFont('Playfair', 30)
c.drawString(M + 12, y, 'Catalog & ')
c.setFont('Playfair-I', 30); c.setFillColor(GOLD_DEEP)
c.drawString(M + 12 + c.stringWidth('Catalog & ', 'Playfair', 30), y, 'Portfolio.')

y -= 20
c.setFillColor(SOFT); c.setFont('Manrope', 9.5)
sub = ('Three vanilla formats, one uncompromising standard — single-origin lots from the volcanic '
       'highlands of East Java. Vacuum-sealed, lab-verified, and export-ready with complete documentation.')
for line in wrap(sub, 'Manrope', 9.5, W - 2 * M - 40):
    c.drawString(M + 12, y, line); y -= 13

products = [
    dict(img='images/GRADE-A-opt.jpg',
         name='Planifolia Vanilla · Grade A', grade='GOURMET · BLACK',
         notes='Bold creamy aroma with high vanillin content. Supple, glossy pods for pastry, ice cream and fine dining.',
         badges=[('MOISTURE', '25–35%'), ('VANILLIN', '2.0–2.5%'), ('LENGTH', '14–19 cm')],
         specs=[('HARVEST ORIGIN', 'Indonesia (East Java)'), ('MOISTURE CONTENT', '25–35%'),
                ('POD LENGTH', '14–19 cm'), ('PACKAGING', 'Vacuum 1kg / Carton 10kg')]),
    dict(img='images/TAHITIAN-opt.jpg',
         name='Tahitian Vanilla · Grade A', grade='GRADE A · GOURMET',
         notes='Floral, fruity notes from oil-rich, plump pods. A perfumed profile for chocolate, desserts and craft drinks.',
         badges=[('MOISTURE', '25–35%'), ('PROFILE', 'Floral & Fruity'), ('LENGTH', '17 cm')],
         specs=[('HARVEST ORIGIN', 'Indonesia (East Java)'), ('MOISTURE CONTENT', '25–35%'),
                ('POD LENGTH', '17 cm'), ('PACKAGING', 'Vacuum 1kg / Carton 10kg')]),
    dict(img='images/Vanila-Powder-opt.jpg',
         name='Vanilla Powder · 100% Pure', grade='GROUND BEAN · PURE',
         notes='100% whole ground vanilla beans. Zero additives, zero sugar — the entire pod, finely milled.',
         badges=[('VANILLIN', '0.5–1%'), ('GRIND', '50–150 µm'), ('PURITY', '100% Pods')],
         specs=[('HARVEST ORIGIN', 'Indonesia (East Java)'), ('FORM', 'Whole pod, ground'),
                ('GRIND SIZE', '50–150 micron, oily'), ('PACKAGING', 'Vacuum 1kg / Carton 10kg')]),
]

CARD_H = 186


def cover_crop(src, out, tw, th):
    """Center-crop to the target aspect (no distortion), save optimized JPG."""
    im = Image.open(src).convert('RGB')
    w, h = im.size
    target = tw / th
    if w / h > target:
        nw = int(h * target)
        x = (w - nw) // 2
        im = im.crop((x, 0, x + nw, h))
    else:
        nh = int(w / target)
        y = (h - nh) // 2
        im = im.crop((0, y, w, y + nh))
    im.save(out, quality=90)
    return out


def draw_card(p, top, idx):
    x, w = M, W - 2 * M
    bottom = top - CARD_H
    c.setFillColor(GLASS); c.setStrokeColor(HexColor('#EAE2D3')); c.setLineWidth(0.9)
    c.roundRect(x, bottom, w, CARD_H, 10, stroke=1, fill=1)

    inner = x + 14
    img_path = cover_crop(BASE + p['img'], os.path.join(os.path.dirname(OUT), f'_crop_{idx}.jpg'), 104, 78)
    c.drawImage(img_path, inner, top - 14 - 78, width=104, height=78, mask='auto')

    tx = inner + 118
    c.setFillColor(POD); c.setFont('Playfair', 14.5)
    c.drawString(tx, top - 30, p['name'])
    pw2 = pdfmetrics.stringWidth(p['grade'], 'Manrope-B', 7) + 20
    pill(W - M - 14 - pw2, top - 30, p['grade'], 'Manrope-B', 7, POD, GOLD)

    c.setFillColor(SOFT); c.setFont('Manrope', 8)
    yy = top - 52
    note_w = w - (tx - x) - 14
    for line in wrap(p['notes'], 'Manrope', 8, note_w):
        c.drawString(tx, yy, line); yy -= 10.5

    by = top - 128
    bx = inner
    for k, v in p['badges']:
        label = pdfmetrics.stringWidth(k, 'Manrope-B', 6.2)
        val = pdfmetrics.stringWidth(v, 'Manrope-B', 7.8)
        cw = max(label, val) + 16
        c.setFillColor(SAND); c.setStrokeColor(LINE)
        c.roundRect(bx, by, cw, 26, 5, stroke=1, fill=1)
        c.setFillColor(MUTED); c.setFont('Manrope-B', 6.2)
        c.drawString(bx + 8, by + 15.5, k)
        c.setFillColor(POD); c.setFont('Manrope-B', 7.8)
        c.drawString(bx + 8, by + 6, v)
        bx += cw + 10

    c.setStrokeColor(LINE); c.setLineWidth(0.7)
    c.line(inner, top - 132, inner + w - 28, top - 132)

    rows = [p['specs'][0:2], p['specs'][2:4]]
    col_w = (w - 28) / 2
    label_y = [top - 146, top - 170]
    value_y = [top - 157, top - 181]
    for i, row in enumerate(rows):
        for j, (k, v) in enumerate(row):
            cxx = inner + j * col_w
            c.setFillColor(MUTED); c.setFont('Manrope-B', 6.4)
            c.drawString(cxx, label_y[i], k)
            c.setFillColor(POD); c.setFont('Manrope-SB', 8.4)
            c.drawString(cxx, value_y[i], v)


top = H - 176
for i, p in enumerate(products):
    draw_card(p, top, i)
    top -= CARD_H + 12

FB = 74
c.setFillColor(POD); c.rect(0, 0, W, FB, stroke=0, fill=1)
c.setFillColor(GOLD); c.rect(0, FB, W, 2, stroke=0, fill=1)

cols = [('WHATSAPP', '+62 851 1158 0309'), ('EMAIL', 'nusavaniid@gmail.com'), ('INSTAGRAM', '@nusavaniid_')]
for i, (k, v) in enumerate(cols):
    x = M + 6 + i * 165
    c.setFillColor(GOLD_BRIGHT); c.setFont('Manrope-B', 6.6)
    c.drawString(x, FB - 26, k)
    c.setFillColor(CREAM); c.setFont('Manrope-SB', 10)
    c.drawString(x, FB - 42, v)

c.setFillColor(CREAM); c.setFont('Manrope-B', 11)
c.drawRightString(W - M - 6, FB - 36, 'nusavaniid.com')
c.setFillColor(HexColor('#B9AFA5')); c.setFont('Manrope', 7.4)
c.drawCentredString(W / 2, FB - 58, 'East Java, Indonesia · FOB Surabaya · Phyto & COA ready · Samples ship in 24–48 hours')

c.showPage()
c.save()
print('PDF regenerated:', os.path.getsize(OUT) // 1024, 'KB')
