# GitHub Pages Deployment Guide

## What Was Changed

### 1. **vite.config.ts** - Updated for GitHub Pages
```typescript
- Added: base: '/cdtrc102/' - Sets the base path for assets
- Added: Build configuration for optimal output
```

### 2. **app/routes.ts** - Changed to HashRouter
```typescript
- Changed: createBrowserRouter → createHashRouter
- Changed: Import from 'react-router' → 'react-router-dom'
- Reason: GitHub Pages doesn't support server-side routing; HashRouter uses URL hashes (#) for routing
```

### 3. **All Page Components** - Updated Imports
```typescript
Files updated:
- app/App.tsx
- app/components/Navigation.tsx
- app/components/Footer.tsx
- app/pages/Root.tsx
- app/pages/Home.tsx
- app/pages/Programs.tsx
- app/pages/Donate.tsx
- app/pages/SummerCamp.tsx
- app/pages/SummerCampRegistration.tsx

Changed: 'react-router' → 'react-router-dom'
```

### 4. **package.json** - Added Deployment Scripts
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "devDependencies": {
    "gh-pages": "^6.x.x"
  }
}
```

### 5. **public/.nojekyll** - Prevents Jekyll Processing
- Empty file that tells GitHub Pages not to use Jekyll
- Ensures files starting with underscores work correctly

### 6. **public/404.html** - Handles Direct URL Access
- Redirects to index.html for HashRouter to handle routing
- Prevents 404 errors when accessing routes directly

### 7. **.github/workflows/deploy.yml** - Automated Deployment
- Automatically builds and deploys on push to main branch
- Uses GitHub Actions for CI/CD

## File Structure

```
cdtrc102/
├── .github/
│   └── workflows/
│       └── deploy.yml          # ✅ NEW - Auto deployment workflow
├── public/
│   ├── .nojekyll              # ✅ NEW - Prevents Jekyll processing
│   └── 404.html               # ✅ NEW - Handles routing fallback
├── app/
│   ├── routes.ts              # ✅ MODIFIED - Uses HashRouter
│   ├── App.tsx                # ✅ MODIFIED - Updated imports
│   ├── components/
│   │   ├── Navigation.tsx     # ✅ MODIFIED - Updated imports
│   │   └── Footer.tsx         # ✅ MODIFIED - Updated imports
│   └── pages/                 # ✅ MODIFIED - All updated imports
├── vite.config.ts             # ✅ MODIFIED - Added base path
└── package.json               # ✅ MODIFIED - Added deploy scripts

```

## Deployment Methods

### Method 1: Automatic Deployment (Recommended)

The project is configured to deploy automatically via GitHub Actions:

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: Select "GitHub Actions"
   - The workflow will automatically build and deploy

3. **Access Your Site:**
   - URL: `https://<username>.github.io/cdtrc102/`
   - Wait 2-3 minutes for first deployment

### Method 2: Manual Deployment

Using the npm scripts:

```bash
# Build and deploy
npm run deploy
```

This will:
1. Run `npm run build` (via predeploy)
2. Deploy the `dist` folder to `gh-pages` branch
3. GitHub Pages will serve from that branch

## How It Works

### HashRouter vs BrowserRouter

**BrowserRouter** (original):
- URLs: `example.com/about`
- Requires server-side routing configuration
- ❌ Doesn't work on GitHub Pages (causes 404 on refresh)

**HashRouter** (updated):
- URLs: `example.com/#/about`
- Client-side only routing using URL hash
- ✅ Works perfectly on GitHub Pages
- All routing handled by JavaScript

### Asset Loading

Vite automatically:
- ✅ Prefixes all asset paths with `/cdtrc102/`
- ✅ Handles image imports correctly
- ✅ Bundles CSS and JS with correct paths
- ✅ Optimizes and fingerprints assets

### Why These Changes Work

1. **base: '/cdtrc102/'** - Ensures all assets load from correct path
2. **HashRouter** - Enables client-side routing without server config
3. **.nojekyll** - Prevents GitHub Pages from ignoring certain files
4. **404.html** - Catches any direct URL access and redirects to index
5. **GitHub Actions** - Automates build and deployment process

## Verifying Deployment

After deployment, check:

1. ✅ Homepage loads: `https://<username>.github.io/cdtrc102/`
2. ✅ Navigation works: Click all menu items
3. ✅ Page refresh works: Refresh on any page (URL will have # in it)
4. ✅ Images load: Check gallery, logos, team photos
5. ✅ Styles work: Tailwind CSS and animations
6. ✅ Icons work: Lucide React icons display

## Troubleshooting

### White Page / Blank Screen
- Check browser console for errors
- Verify base path in vite.config.ts matches repo name
- Ensure GitHub Pages is enabled in repository settings

### 404 Errors
- Verify HashRouter is being used
- Check that .nojekyll file exists in dist folder
- Ensure 404.html redirects to correct path

### Assets Not Loading
- Verify vite.config.ts has correct base path
- Check that images are imported (not using string paths)
- Review browser network tab for failed requests

### Routes Not Working
- Confirm HashRouter import from 'react-router-dom'
- Check that all Link components are from 'react-router-dom'
- Verify RouterProvider is using the correct router

## Development vs Production

### Development (Local)
```bash
npm run dev
```
- No base path applied
- URLs: `localhost:5173/about`
- Hot module replacement works

### Production (GitHub Pages)
```bash
npm run build
npm run preview  # Test production build locally
```
- Base path: `/cdtrc102/` applied
- URLs: `username.github.io/cdtrc102/#/about`
- Optimized and minified

## Next Steps

1. **Push your code:**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages"
   git push origin main
   ```

2. **Wait for deployment:**
   - Check Actions tab on GitHub
   - Wait for green checkmark (2-3 minutes)

3. **Visit your site:**
   - `https://<username>.github.io/cdtrc102/`

4. **Custom Domain (Optional):**
   - Add CNAME file to public folder
   - Configure DNS settings
   - Update vite.config.ts base path

## Important Notes

- URLs will have `#` in them (e.g., `/#/about`) - this is normal and required
- Asset paths are automatically handled by Vite
- All dependencies (Tailwind, Framer Motion, Lucide) work correctly
- Lazy loading and dynamic imports work as expected
- No additional configuration needed for animations or icons

## Repository Settings

Ensure in GitHub repository settings:
1. **Pages → Source**: GitHub Actions
2. **Actions → General**: Allow all actions
3. **Environments**: `github-pages` should be created automatically

Your site will be live at: **https://\<username\>.github.io/cdtrc102/**
