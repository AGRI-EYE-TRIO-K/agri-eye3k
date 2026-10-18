# AGRI-EYE TRIO K Website — Performance and Validation Notes

## Current package

- The site contains three static HTML pages: `index.html`, `gallery.html`, and `about.html`.
- Images use optimized WebP where suitable, with compact PNG/ICO favicon variants retained for browser compatibility.
- Content images include intrinsic dimensions and lazy-loading/decoding hints where appropriate; the homepage hero is loaded at high priority.
- The product walkthrough at `assets/video/demo.mp4` is lazy-loaded in the gallery and plays only after visitor action.
- The About page contains two scroll-scrubbed peanut-growth videos: a portrait clip (`assets/video/peanut-growth-scroll.mp4`, about 20.08 seconds) and a landscape clip (`assets/video/peanut-growth-scroll-landscape.mp4`, about 20.9 seconds). Portrait viewports select the portrait clip; landscape viewports and computers select the landscape clip. Both are muted and remain paused; page scrolling seeks forward or backward through frames.
- The decorative canvas is capped to a reduced pixel ratio and particle count, throttled, paused while the tab is hidden, and adjusted for reduced-motion preferences.
- Cloudflare Pages `_headers` rules provide security-related headers and caching behavior for static assets while HTML revalidates.
- The About page copy has no foreground glass cards or blur. Text shadow and a low-opacity vignette preserve legibility while leaving the footage visible.
- All three pages support English, Arabic, Spanish and Italian; language choice and theme preference are stored locally where browser storage is available.

## Current static checks

- `node --check assets/js/site.js`: PASS.
- HTML structure, local links/assets, IDs and page anchors across all three pages: PASS.
- All HTML translation keys are present in all four language dictionaries: PASS.
- CSS parser: PASS, with no top-level parse errors.
- `sitemap.xml`, `site.webmanifest` and each page's JSON-LD: PASS.
- The landscape story clip was re-encoded without audio and uses frequent keyframes to improve seeking. The portrait clip is the previously validated silent source.

## Limits and next checks

The project has not yet been deployed to Cloudflare Pages, and the custom domain has not been confirmed or purchased. A managed Chromium policy blocked local browser navigation in this build environment, so the final visual/interactive test could not be performed here. After deployment, test both orientations on a real phone and desktop, including slow scrolling, upward scrubbing, stop-on-scroll, the last frame at page bottom, language changes and mobile browser address-bar resizing. Run Lighthouse/PageSpeed on the public HTTPS pages for production measurements.
