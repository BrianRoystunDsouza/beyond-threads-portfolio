# 🧶 Beyond Threads — Portfolio Website

A premium 3D portfolio website for Prapti's handmade crochet business, built with React + Vite + Tailwind CSS + React Three Fiber + Framer Motion.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed ([download here](https://nodejs.org))

### 1. Install dependencies
```bash
cd beyond-threads
npm install
```

### 2. Start development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production
```bash
npm run build
npm run preview   # preview the production build locally
```

---

## 📁 Folder Structure

```
beyond-threads/
├── public/
│   └── favicon.svg              # Site favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky navigation bar
│   │   ├── Footer.jsx           # Footer with links
│   │   ├── FloatingWhatsApp.jsx # Floating WhatsApp CTA button
│   │   └── YarnCanvas.jsx       # 3D yarn ball (React Three Fiber)
│   ├── sections/
│   │   ├── Hero.jsx             # Full-screen hero with 3D element
│   │   ├── About.jsx            # Prapti's story section
│   │   ├── Portfolio.jsx        # Product gallery with modal
│   │   ├── Process.jsx          # How it's made — step by step
│   │   ├── Testimonials.jsx     # Customer reviews slider
│   │   └── Contact.jsx          # Contact + WhatsApp + form
│   ├── hooks/
│   │   └── useInView.js         # Intersection Observer hook
│   ├── App.jsx                  # Root component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles + Tailwind
├── index.html                   # HTML shell + Google Fonts
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## ✏️ How to Customize

### 🔢 Update WhatsApp Number
Search for `919XXXXXXXXX` across all files and replace with your actual number (country code + number, no `+` or spaces):
```
919876543210   ← example for India +91 98765 43210
```

Files to update:
- `src/sections/Portfolio.jsx` — each product's `whatsapp` field
- `src/sections/Contact.jsx` — form submission and direct link
- `src/components/FloatingWhatsApp.jsx` — floating button link
- `src/components/Footer.jsx` — footer WhatsApp icon

### 📸 Replace Profile Photo (About section)
In `src/sections/About.jsx`, find the placeholder block (marked with `— Replace with your photo —`) and replace it with:
```jsx
<img
  src="/images/prapti.jpg"
  alt="Prapti"
  className="w-full h-full object-cover"
/>
```
Place `prapti.jpg` in the `public/images/` folder.

### 🖼️ Update Portfolio Products
In `src/sections/Portfolio.jsx`, edit the `items` array at the top:
```js
{
  id: 1,
  title: 'Your Product Name',
  category: 'Toys',           // must match a category in the filter list
  description: 'Your description here...',
  image: '/images/product1.jpg',   // place image in public/images/
  tags: ['Gift', 'Custom'],
  whatsapp: '919876543210',
},
```

To add more categories, also update the `categories` array:
```js
const categories = ['All', 'Toys', 'Bags', 'Flowers', 'Décor', 'Plants', 'YourNewCategory']
```

### 💬 Update Testimonials
In `src/sections/Testimonials.jsx`, edit the `testimonials` array with real customer reviews.

### 🔗 Update Instagram Handle
Search for `beyondthreads` and replace with your actual Instagram username across:
- `src/sections/Portfolio.jsx`
- `src/sections/Contact.jsx`
- `src/components/Footer.jsx`

### 📊 Update Stats (Hero section)
In `src/sections/Hero.jsx`, update the stats array:
```js
{ num: '200+', label: 'Pieces Crafted' },
{ num: '50+',  label: 'Happy Customers' },
{ num: '100%', label: 'Handmade' },
```

---

## 🌐 Deployment

### Deploy to Vercel (recommended — free)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → Import project
3. Framework: **Vite** (auto-detected)
4. Click Deploy ✓

### Deploy to Netlify (free)
1. Run `npm run build` — output is in `dist/`
2. Go to [netlify.com](https://netlify.com) → Drag & drop the `dist/` folder
3. Done ✓

### Deploy to GitHub Pages
```bash
npm install --save-dev gh-pages
```
Add to `package.json` scripts:
```json
"deploy": "gh-pages -d dist"
```
Then:
```bash
npm run build && npm run deploy
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary font | Playfair Display (headings) |
| Body font | DM Sans |
| Accent font | Cormorant Garamond (italic) |
| Primary color | `#0d9488` (teal-600) |
| Light accent | `#5eead4` (teal-300) |
| Aqua highlight | `#7fffd4` |
| Background | `#f0fdfa` (teal-50) |

---

## ⚡ Performance Tips

- Replace placeholder `unsplash.com` images with your own optimized photos (WebP format, max 800px wide)
- Place all product images in `public/images/` and reference as `/images/filename.jpg`
- The 3D yarn ball uses lazy loading — it won't block the initial page load

---

## 🛠️ Tech Stack

| Library | Version | Purpose |
|---------|---------|---------|
| React | 18 | UI framework |
| Vite | 5 | Build tool |
| Tailwind CSS | 3 | Utility styling |
| Framer Motion | 11 | Animations |
| React Three Fiber | 8 | 3D rendering |
| @react-three/drei | 9 | 3D helpers |
| Three.js | 0.161 | WebGL engine |

---

Made with 🧶 and love for **Beyond Threads** by Prapti.
