# AGRI-EYE TRIO K — Cloudflare Pages deployment and SEO checklist

## Current package
- Static website pages: `index.html`, `gallery.html`, and `about.html`.
- Shared CSS/JavaScript, images, favicons, manifest and three video assets (one product walkthrough plus portrait and landscape story clips).
- `_headers` for Cloudflare Pages, plus `robots.txt`, `sitemap.xml`, Open Graph/Twitter metadata and structured data.
- English, Arabic, Spanish and Italian user-interface text.

## Recommended deployment method

**Recommended: connect GitHub to Cloudflare Pages when creating the project.** This is the best fit for versioned website updates. Cloudflare Pages does not convert an existing Direct Upload project into a Git-integrated project later; switching methods requires creating a new Pages project.

1. Create a dedicated GitHub repository for the website. Upload the *contents* of this folder, so `index.html`, `gallery.html`, `about.html`, `assets/`, and `_headers` sit at the repository root (not one directory below it).
2. In Cloudflare Dashboard, open **Workers & Pages → Create → Pages → Connect to Git** (wording may vary) and authorize GitHub.
3. Select the repository and leave the build command blank; this is a plain static HTML/CSS/JavaScript site. Ensure the root directory contains `index.html`.
4. Deploy and note the generated `https://<project-name>.pages.dev` address. Keep a local ZIP backup of each working release.

Direct Upload remains possible if you prefer manual deployment, but choose that route only if you are comfortable creating a new Pages project later should you want Git integration.

## SEO and custom domain

1. Replace every `YOUR-CLOUDFLARE-PROJECT.pages.dev` placeholder in canonical URLs, Open Graph/Twitter URLs, JSON-LD, `robots.txt`, and `sitemap.xml` with the actual Pages hostname. Redeploy.
2. The custom domain `agri-eye-k.com` has not yet been verified as available or purchased. After registration and connection, update the same URLs to the chosen canonical domain. Configure `www` to redirect to the canonical host if desired.
3. Verify these public HTTPS paths: `/`, `/gallery.html`, `/about.html`, `/robots.txt`, `/sitemap.xml`, `/assets/images/og-card.webp`, `/assets/video/demo.mp4`, `/assets/video/peanut-growth-scroll.mp4`, and `/assets/video/peanut-growth-scroll-landscape.mp4`.
4. Run Lighthouse/PageSpeed on the homepage, gallery and About page, on both desktop and mobile. Then add the verified site to Google Search Console and submit `/sitemap.xml`.

## About-page video behavior

The About Project page uses scroll scrubbing, not autoplay. The visible clip is chosen by viewport orientation: portrait video for portrait screens, landscape video for landscape screens and computers. Scrolling down moves forward through the video, scrolling up moves backward, and stopping the scroll freezes the current frame. The bottom of the document maps to the end of the selected clip. Check this on a real phone, including orientation changes and slow upward scrubbing.

## Date and project history

The footer uses `© 2024–2026 AGRI-EYE TRIO K` to reflect the stated period of project-related scripting/development. The About page distinguishes the 2024 GeoAI project direction, the 2025 Windows V1.0 application, and continued development in 2026. The copyright range is not a claim that the current website version was published in 2024, and it is not evidence of a specific length of professional employment.

## Current status boundary

The actual Cloudflare Pages project URL and custom domain are not yet known. The `YOUR-CLOUDFLARE-PROJECT.pages.dev` strings are intentional placeholders and must be replaced before final SEO sign-off. No live Cloudflare deployment, domain registration, HTTPS or Google indexing test is claimed by this package.
