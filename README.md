# 4th Down Decider Website

This repository contains the source code for the 4th Down Decider, a web-based tool for exploring football fourth down decisions. The application is entirely client-side JavaScript with no server-side logic.

## Running the Site Locally

1. Install a simple HTTP server, for example using `npm`:

   ```bash
   npm install -g serve
   ```

2. Start the server from the repository root:

   ```bash
   serve site
   ```

3. Open `http://localhost:3000` in your browser.

## Folder Structure

```
/site
  index.html      # main page
  style.css       # styles
  script.js       # client-side logic
```

All functionality is implemented in `site/script.js` using client-side JavaScript.

## Deploying to Koyeb

The repository includes a `Dockerfile` that serves the contents of the `site` directory using the [`serve`](https://www.npmjs.com/package/serve) package. Koyeb will automatically detect this Dockerfile and build the container. No additional configuration is required.

1. Push your fork to GitHub.
2. Create a new Koyeb App pointing to your repository.
3. Koyeb will build the Docker image and expose it on port `8080`.

You can visit `https://app.koyeb.com` for detailed deployment instructions.

## Troubleshooting

If your build fails, see [TROUBLESHOOTING.md](TROUBLESHOOTING.md) for common causes and fixes.

## Contributing

Contributions are welcome! Fork the repository, create a branch, and submit a pull request. Please keep changes limited to client-side code.
