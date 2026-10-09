# CDTRC Website Setup Guide

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

## Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

2. **Required Dependencies**
   
   The project uses the following main dependencies:
   - `react` - UI framework
   - `react-dom` - React DOM rendering
   - `react-router` - Navigation and routing
   - `framer-motion` (motion/react) - Animations
   - `lucide-react` - Icon library
   - `tailwindcss` - CSS framework
   - `typescript` - Type safety

   If not already in package.json, install them:
   ```bash
   npm install react react-dom react-router framer-motion lucide-react
   npm install -D tailwindcss typescript @types/react @types/react-dom
   ```

## Development

1. **Start Development Server**
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

2. **Build for Production**
   ```bash
   npm run build
   ```
   or
   ```bash
   yarn build
   ```

## Project Structure

```
cdtrc-website/
├── app/
│   ├── components/
│   │   ├── figma/
│   │   │   └── ImageWithFallback.tsx
│   │   ├── ui/
│   │   │   └── [UI components]
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── pages/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Gallery.tsx
│   │   ├── Home.tsx
│   │   ├── Programs.tsx
│   │   ├── Root.tsx
│   │   └── Staff.tsx
│   ├── App.tsx
│   └── routes.ts
├── styles/
│   ├── custom.css
│   ├── fonts.css
│   ├── index.css
│   ├── tailwind.css
│   └── theme.css
├── cdtrc.png (logo)
└── README.md
```

## Customization

### Colors
The theme colors are defined in `styles/theme.css`:
- Sea Blue: `#0891b2`
- Yellow Accent: `#fbbf24`

### Content
Update the following files to customize content:
- **Contact Information**: `app/components/Footer.tsx` and `app/pages/Contact.tsx`
- **Staff Members**: `app/pages/Staff.tsx`
- **Programs**: `app/pages/Programs.tsx`
- **Gallery Images**: `app/pages/Gallery.tsx`

### Logo
Replace `cdtrc.png` in the root directory with your organization's logo.

## Features

✅ Fully responsive design
✅ Smooth animations and transitions
✅ SEO-friendly structure
✅ Accessibility compliant
✅ Modern UI with Tailwind CSS
✅ Type-safe with TypeScript
✅ Fast navigation with React Router

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### TypeScript Errors
If you see TypeScript errors, ensure all dependencies are installed:
```bash
npm install
```

### Animation Issues
If animations don't work, check that `framer-motion` is properly installed:
```bash
npm install framer-motion
```

### Styling Issues
If styles don't apply, ensure Tailwind CSS is configured correctly and run:
```bash
npm run build
```

## Support

For issues or questions, contact: info@cdtrc.org

---

Built with ❤️ for CDTRC
