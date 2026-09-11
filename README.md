# Korstomer website — editable version

The original single-file page has been separated into focused files so you can
change content, design, and behavior without searching through one large block.

## File map

- `index.html` — all visible page content and service sections.
- `styles.css` — colors, spacing, layout, animations, and mobile styles.
- `script.js` — WhatsApp settings and the repeated brand lists.
- `assets/korstomer-icon.svg` — temporary local logo supplied because the
  original `korstomer-icon.png` was not included with the HTML attachment.

## Most common edits

### Change the WhatsApp number

Open `script.js` and edit `WHATSAPP_PHONE` near the top. Use international format
without a `+`, spaces, or dashes.

### Change a button's WhatsApp message

Open `index.html`, find the button, and edit its `data-msg` value.

### Change services, prices, and text

Open `index.html`. Each major area has a label such as `Subscription plans`,
`Digital advertising`, or `Frequently asked questions`.

### Change colors

Open `styles.css` and edit the values under `1. Design tokens`. The main brand
colors are `--red`, `--red2`, `--bg`, and `--text`.

### Change the moving brand lists

Open `script.js` and edit the `BRANDS` array. The same list supplies both the
moving services rail and the animated footer icons.

### Replace the temporary logo

Replace `assets/korstomer-icon.svg` with your real logo, or update the two logo
paths in `index.html` if your file has a different name.

## Preview locally

Open `index.html` in a browser. The Google fonts, Simple Icons, and Unsplash
photos are loaded online, so an internet connection is needed for those assets.
