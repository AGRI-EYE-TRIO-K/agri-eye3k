# Phase 4 — UI and video fixes

- Fixed the hero display at desktop/tablet breakpoints by matching the section aspect ratio to the 1800×1013 hero artwork.
- Moved EN | عربي | ES outside the navigation container so the language selector remains visible when the mobile/tablet menu is closed.
- Fixed gallery crop cards: translated the label span only, not the anchor that contains the crop image.
- Changed the “one platform” headline to high-contrast light-lime text.
- Disabled creator-credit animation, glow and filters on the gallery page to keep the text crisp.
- Removed the MP4 file-path/setup recommendation from visible gallery content.
- Added a seek/progress bar, elapsed/duration display, mute toggle and full-screen control; full-screen uses the Fullscreen API with a WebKit video fallback.
- Updated media-query behavior and added stylesheet/script cache-busting (`?v=4`).
- Browser-harness tested the desktop hero, persistent language selector, 320px/390px mobile header, localization-safe crop images, footer clarity, video metadata/seek and fullscreen-button wiring.
