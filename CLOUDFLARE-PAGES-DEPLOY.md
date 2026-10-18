# AGRI-EYE TRIO K — Cloudflare Pages deployment and SEO checklist

## Current package
- Static website pages: `index.html`, `gallery.html`, and `about.html`.
- Shared CSS/JavaScript, images, favicons, manifest and two video assets.
- `_headers` for security and caching on Cloudflare Pages.
- `robots.txt`, `sitemap.xml`, Open Graph/Twitter metadata, and structured data.

## Choose the Pages deployment type before creating a project

**Recommended for this project: connect GitHub during initial setup.** This lets you keep website versions in a repository and deploy approved changes by pushing to the connected branch. Cloudflare Pages does not allow converting an existing Direct Upload project to Git integration later; switching methods requires creating a new Pages project. See Cloudflare's [Git integration documentation](https://developers.cloudflare.com/pages/configuration/git-integration/) and [Direct Upload documentation](https://developers.cloudflare.com/pages/get-started/direct-upload/).

### Recommended: GitHub integration
1. Create a dedicated GitHub repository for the website. Upload the *contents* of this folder, so `index.html`, `gallery.html`, `about.html`, `assets/`, and `_headers` are at the repository root (not nested inside an extra folder).
2. In Cloudflare Dashboard, open **Workers & Pages → Create → Pages → Connect to Git** (wording can vary) and authorize GitHub.
3. Select the website repository and set the build command to blank because this is plain static HTML/CSS/JavaScript. If files are at the repository root, leave the root directory at its default; otherwise set the folder that contains `index.html` as the root.
4. Deploy and note the generated `https://<project-name>.pages.dev` address. Keep a local ZIP backup of each release.

### Alternative: Direct Upload
Use Direct Upload only if you prefer manual uploads and accept that this project cannot later be converted to a Git-integrated project. Download/extract this ZIP and upload the folder that directly contains `index.html` and the `assets/` directory. Do not upload an outer folder that leaves `index.html` one level below the deployment root.

## SEO and domain setup
1. Replace every `YOUR-CLOUDFLARE-PROJECT.pages.dev` placeholder in canonical URLs, Open Graph/Twitter URLs, JSON-LD, `robots.txt`, and `sitemap.xml` with the actual deployed Pages hostname. Redeploy.
2. The custom domain `agri-eye-k.com` has not yet been verified as available or purchased. After it is registered and connected, update the same URLs to the chosen canonical domain (for example, `https://agri-eye-k.com` only after confirming that it works). Configure the `www` hostname to redirect to the selected canonical host if desired.
3. Verify `/`, `/gallery.html`, `/about.html`, `/robots.txt`, `/sitemap.xml`, `/assets/images/og-card.webp`, `/assets/video/demo.mp4`, and `/assets/video/peanut-growth-scroll.mp4`, and `/assets/video/peanut-growth-scroll-landscape.mp4` on the public HTTPS address.
4. Run Lighthouse/PageSpeed on desktop and mobile. Then add the verified site to Google Search Console and submit `/sitemap.xml`.

## About-page video behavior
The About Project page uses scroll scrubbing rather than autoplay. The video is paused at the first frame on entry; scrolling down maps the document's scroll position to later video frames, scrolling up maps back to earlier frames, and stopping the scroll freezes the current frame. The bottom of the document maps to the final frame. Since browser decoders and phones can behave differently, verify the interaction on a physical phone after deployment, especially slow scrolling, upward scrubbing, language changes, and the final frame.

## Important status boundary
The actual Cloudflare Pages project URL and custom domain are not yet known. The `YOUR-CLOUDFLARE-PROJECT.pages.dev` entries are deliberate placeholders and must be replaced before final SEO sign-off. No live Cloudflare deployment, domain registration, or public HTTPS test is claimed by this package.
