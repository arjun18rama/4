# Deploying the `/site` directory

The `/site` folder contains static HTML, CSS, and JavaScript files. You can publish
this folder with services like GitHub Pages or Netlify.

## GitHub Pages
1. Create a branch named `gh-pages` or use GitHub's Pages settings to serve the
   `/site` directory.
2. Push the contents of `/site` to the `gh-pages` branch or configure the
   `gh-pages` branch as the Pages source.
3. Visit your GitHub Pages URL to see the deployed site.

## Netlify
1. Sign in to Netlify and create a new site from Git.
2. Select this repository and set the publish directory to `site`.
3. Deploy the site. Netlify will host the contents of the `/site` folder.

## Verifying locally
Open `site/index.html` in a web browser to verify the site renders as expected
before deploying.
