# Bhargav HJ — Portfolio

Personal developer portfolio built with Next.js, React, Material UI, and Framer Motion.

## Local development

Requires Node.js and npm.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000` in your browser.

## Production

Create a production build and run it locally with:

```bash
npm ci
npm run build
npm start
```

The project includes a committed `package-lock.json`, so `npm ci` provides reproducible installs for local development, CI, and deployment.

## Deployment

This is a standard Next.js application and can be deployed to Vercel or another Node-compatible hosting platform. Configure the deployment to use the repository root and the package scripts above.

## Project structure

```text
src/app/       # Next.js App Router pages and styles
public/        # Static assets
package.json   # Dependencies and scripts
package-lock.json
next.config.mjs
```
