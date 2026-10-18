# AGRI-EYE TRIO K — Website Package

Responsive static website package for Cloudflare Pages. No build command or package installation is required.

## Performance notes
- See `PERFORMANCE-OPTIMIZATION.md` for the optimization summary and validation checks.

## Pages
- `index.html` — landing page, hybrid platform overview, capabilities, crop-information carousel, comparison graphic, founder profile and contact details.
- `gallery.html` — application screenshots, reusable full-size image viewer, and the product demonstration video.
- `about.html` — a four-language, text-only project story over responsive portrait and landscape peanut-growth videos controlled by page scrolling.

## Languages
The site includes English, Arabic, Spanish and Italian selectors (`EN | عربي | ES | IT`) on all three pages. The selected language is remembered by the browser when local storage is available.

## Product video
The supplied 60-second landscape MP4 is included at:

`assets/video/demo.mp4`

The gallery uses that exact path. The MP4 source and metadata are attached lazily when the video section approaches the viewport; playback begins only after an explicit visitor action. Visitors can tap the video itself to play/pause, use the play/sound controls, scrub the enlarged touch-friendly progress bar, and enter fullscreen. iOS uses native video fullscreen controls when available. The crop-card translations update their labels without replacing the images. Browser autoplay rules can still require the visitor to press Play. To replace the clip, keep the same filename/path and use MP4 (H.264 video and AAC audio), preferably 16:9. The About page uses two peanut-growth MP4s: the original portrait clip (about 20.08 seconds) on portrait screens and the new 16:9 landscape clip (about 20.9 seconds) on landscape screens and computers. Both remain paused and muted; document scroll maps to each clip, reverses when scrolling up, and stops when scrolling stops.

## Assets and interactions
- `assets/images/hero.webp` and `assets/images/drone.webp` contain the updated hero and drone imagery supplied for this revision.
- `assets/images/company-comparison.webp` is the clickable comparison graphic.
- `assets/images/founder-khaled.webp` is the clickable founder photo.
- `assets/images/app-emblem.webp` is used for the loading screen and floating emblem.
- The logo intro lasts about two seconds and includes animated gold rings. A low-contrast animated green/gold background responds to pointer movement.
- Crop cards can be browsed horizontally. Comparison, founder and gallery images open in a shared full-size image viewer.
- WhatsApp and back-to-top controls are fixed at the lower-left. The circular app emblem sits at the lower-right.

## Publish on Cloudflare Pages

This static site requires no build command. Recommended: connect a GitHub repository to Cloudflare Pages from the start, with `index.html` at the repository root, to enable versioned updates. Important: Cloudflare does not convert a Direct Upload project to Git integration later; switching requires a new Pages project. See `CLOUDFLARE-PAGES-DEPLOY.md` and `SEO-DEPLOYMENT-CHECKLIST.md`.

The final Pages project address and custom domain have not yet been confirmed. Replace all `YOUR-CLOUDFLARE-PROJECT.pages.dev` placeholders after the first deployment, then redeploy and verify the SEO endpoints.

## Contact details
- Email: `khaled.albakour.geo@gmail.com`
- WhatsApp: `+963 958 687 748`

## Important notes
- Crop descriptions are framed as screening indicators and relative proxies, not confirmed diagnoses or guaranteed yield forecasts.
- The selection/copy and shortcut restrictions are only a light deterrent against casual copying. They cannot prevent screenshots, reliably disable browser developer tools, or make public HTML/CSS/JavaScript and downloaded assets secret. Do not place API keys, passwords or other secrets in this static site.
- The desktop application's own `web/index.html` remains untouched; this is a separate website project.



## Phase 8 — light-theme visual refinement

- Reduced the light overlay on the responsive page background images so the imagery remains visible in daytime mode.
- Lowered the opacity of light-theme cards/panels and removed unnecessary blur from selected surfaces while retaining readable dark text.
- Updated the About-page hero keyword gradient to gold, ivory and light green for contrast against the story video.
- Simplified the closing founder-story wording across EN/AR/ES/IT, retaining the intent to develop and commercialize the platform without the requested verification/responsibility wording.
- Updated the stylesheet and script cache-busting version to `v=9`.

## Phase 7 — About story, reports and Italian localization

- Removed the glass cards and blur behind the About-page copy. Text now sits directly over the visible video, supported by text shadows and a light vignette rather than panels.
- Added a responsive landscape peanut-growth clip for wide screens while retaining the vertical clip for portrait screens. The selected clip follows document scroll in both directions; the page footer is included in the scroll-to-video mapping.
- Reorganized the founder story and timeline: self-study from 2020, GIS learning from 2022, agricultural scripts in 2023–2024, GeoAI/project direction in 2024, the V1.0 Windows application in 2025, and further development in 2026.
- Added clear descriptions of Online/Offline workflows, candidate low-vigor and water-stress zones, targeted drone-mission planning, professional reports in four languages, KML/KMZ and supported tractor/precision-agriculture exports. Drone mission and mobile app development are explicitly described as ongoing work.
- Added Italian localization across the three pages and updated the accessible labels, theme control and gallery player labels.
- Changed the project copyright line to `© 2024–2026`, reflecting the reported start of agricultural scripting/project development in 2024 and ongoing work through 2026. This does not claim that the current website was published in 2024.
- Added the wide video poster and cache-busted the CSS/JS as version 8.

## Performance pass
- Photos, crop cards, logos and screenshots are served as optimized WebP assets; a compact PNG is retained for the favicon. Original filenames with spaces/non-ASCII characters have been replaced by URL-safe asset names.
- The hero image is preloaded at high priority. Other images use native lazy loading and asynchronous decoding where appropriate, with intrinsic width/height to reduce layout shifts.
- The demo video uses `preload="none"` and its source is attached only when the video section is near the viewport (or the visitor chooses Play).
- The decorative canvas is capped to a lower pixel ratio and a smaller particle count, throttled to a modest frame rate, paused while the tab is hidden, and rendered statically when reduced-motion is requested.
- Cloudflare Pages `_headers` rules revalidate HTML and cache static assets for 30 days.
- Run Lighthouse/PageSpeed after publishing to capture real-world performance on both desktop and mobile networks; this package's local checks do not replace a field performance measurement.


## Phase 2 — Content, language and mobile-footer polish

- Expanded the founder section to describe AGRI-EYE TRIO K as a Geospatial Agricultural Decision-Support Platform.
- Added the founder's motivation and the importance of academic training and field validation.
- Added the new founder paragraph in English, Arabic and Spanish.
- Localized the browser title, meta description and Open Graph text when the selected language changes.
- Corrected loader orbit centering across mobile and desktop breakpoints.
- Reworked the floating emblem rotation so it returns upright after interaction.
- Hide fixed controls while the footer is visible to keep the creator credit and rights statement readable.
- Improved wrapping for long multilingual text and added translated accessible names for key mobile controls.
- Kept phone digits left-to-right inside Arabic text using a bidi-isolated span.


## Phase 3 — publication readiness

This version replaces the hero, founder, comparison and Contact-section images; adds the supplied landscape/portrait backgrounds; fixes the floating emblem so it spins without navigating; and makes the back-to-top button perform a real scroll to document top. It also includes favicon variants, Open Graph/Twitter cards, structured data, `robots.txt`, `sitemap.xml`, and Cloudflare Pages `_headers` rules.

**Before final SEO sign-off:** replace the `YOUR-CLOUDFLARE-PROJECT.pages.dev` placeholders after the first Cloudflare Pages deployment, then redeploy. Read `SEO-DEPLOYMENT-CHECKLIST.md`.


## Phase 4 — header, gallery and video usability

- The EN | عربي | ES selector stays visible in the top bar on both pages, including mobile and compact tablet layouts. The navigation links collapse to a menu on smaller screens.
- The desktop hero uses the source image ratio to keep the whole banner visible rather than cropping the top or bottom.
- Gallery crop labels are translated on their own text spans, so switching language never deletes the crop images.
- The “one platform” line uses a high-contrast solid light-lime color, and the gallery creator credit has its glow/blur animation disabled for crisp text.
- Removed the visitor-facing MP4 setup note. The gallery player now has a seek bar, elapsed/duration display, mute/sound control and a full-screen button.
- Added `?v=4` asset cache-busting to both pages so browsers request the updated stylesheet and script.
- Ran browser-harness checks at desktop 1440px and mobile 390px/320px, including trilingual switching, crop image loading, seek-bar behavior and full-screen button wiring.


## Phase 5 — mobile video, theme switch and emblem card

- Added an EN/AR/ES-labelled accessible sun/moon theme control to both headers. The dark/light preference persists across the two pages using local storage.
- Added a high-contrast light theme while preserving AGRI-EYE's green/gold palette and keeping image-led sections legible.
- Rebuilt progress seeking around a stable 0–1000 range, with a larger mobile touch target and protected thumb position during drag.
- Tapping the video toggles playback. Autoplay-on-scroll was removed so playback does not unexpectedly start or pause due to scrolling.
- The fullscreen button uses the standard Fullscreen API when supported, iOS native media fullscreen when supported, and a fixed full-viewport fallback otherwise.
- Tapping the floating emblem opens a centered logo card with three gold rings and the creator credit; it dismisses after three seconds or on close/Escape.
- `assets/css/site.css` and `assets/js/site.js` are versioned with `?v=6` cache-busting.
