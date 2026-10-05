# Hrithika D — Artist & Painter

A personal portfolio website showcasing portraits, traditional works, landscapes and mixed-media studies, with a commission enquiry section.

**Live site:** https://hrithikashekar.github.io/HRITHIKA-Portfolio/

---

## Overview

The site presents thirteen original artworks across acrylic, watercolour, charcoal, colour pencil and mixed media. It is designed as a quiet, gallery-style space where the artwork leads and the interface stays out of the way.

## Features

- **Editorial homepage** with a featured artwork and a short artist statement
- **Curated collections:** Portraits & Figures, Cultural & Devotional, Landscapes & Places
- **Filterable gallery** by category (portraits, cultural, landscapes, charcoal, mixed media)
- **Full-screen lightbox** with previous/next buttons and keyboard navigation (← → Esc)
- **About section** with a practice and medium overview
- **Commission process:** idea → confirmation → creation and delivery
- **Contact section** with direct phone, email and WhatsApp links, and a one-click "Prepare email" button
- **Responsive design** for desktop, tablet and mobile, with a mobile navigation menu
- **Accessibility:** semantic HTML, keyboard focus styles, descriptive labels, and reduced-motion support

## Tech stack

Plain HTML, CSS and JavaScript. There are no frameworks, build tools or dependencies.

- Fonts: [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) and [DM Sans](https://fonts.google.com/specimen/DM+Sans) via Google Fonts
- Hosting: GitHub Pages

## Project structure

```
HRITHIKA-Portfolio/
├── index.html      # Page content and structure
├── style.css       # All styling and responsive layouts
├── script.js       # Lightbox, gallery filter, menu, email button
├── README.md
└── assets/
    ├── artwork-01.jpg … artwork-13.jpg
    └── artistpic.jpg
```

## Running locally

No installation is needed. Download or clone the repository and open `index.html` in any modern browser.

## Updating the site

**Add a new artwork**
1. Add the image to the `assets/` folder (for example `artwork-14.jpg`).
2. In `index.html`, copy an existing `<article class="art-card">` block inside the gallery and update its image, title, medium and category.
3. In `script.js`, add a matching entry at the end of the `artworks` list so it appears correctly in the lightbox. The order must match the `data-index` numbers in `index.html`.

**Change contact details**
- Edit the three detail rows in the Contact section of `index.html`.
- Update `RECIPIENT` in `script.js` if the email address changes.

**Edit titles, mediums or text**
- Change them in `index.html`. For titles and mediums, also update the matching entry in the `artworks` list in `script.js`.

## Deployment

The site is published with GitHub Pages:

1. Go to **Settings → Pages**
2. Set **Source** to *Deploy from a branch*
3. Choose the `main` branch and the `/ (root)` folder
4. Save. Changes go live within a few minutes of each commit.

## Notes on images

Compress artwork images to roughly 300–500 KB each before uploading (for example with [Squoosh](https://squoosh.app)). This keeps the site fast on mobile connections. Keep the original high-resolution files separately.

## Contact

- **Email:** hrithikashekhar2005@gmail.com
- **Instagram:** [@hrithika_hrithi_](https://instagram.com/hrithika_hrithi_)

## Copyright

© 2026 Hrithika D. All artwork, images and written content on this site are the property of the artist. Please do not copy, reproduce or redistribute them without permission.
