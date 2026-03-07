# Gaurav Wagh — Portfolio Website

A modern, responsive, and professional portfolio website built with **Next.js 15** and **Vanilla CSS**.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
Portfolio/
├── app/
│   ├── layout.js         # Root layout with SEO metadata & fonts
│   ├── page.js            # Main page composing all sections
│   ├── globals.css        # Design system (CSS variables, themes, reset)
│   └── components.css     # Component-level styles
├── components/
│   ├── Navbar.js          # Fixed nav with theme toggle & mobile menu
│   ├── Hero.js            # Hero section with code block visual
│   ├── About.js           # About me with highlight cards
│   ├── Skills.js          # Categorized skills grid
│   ├── Projects.js        # Project cards with tech tags
│   ├── Experience.js      # Timeline-style experience
│   ├── Trading.js         # MetaTrader 5 trading algorithms
│   ├── Contact.js         # Contact form & social links
│   └── Footer.js          # Footer with quick links
├── hooks/
│   └── useScrollAnimation.js  # Intersection Observer scroll animations
├── package.json
├── next.config.mjs
└── jsconfig.json
```

## ✨ Features

- **Dark / Light mode** toggle
- **Smooth scroll** navigation
- **Animated sections** (fade-in on scroll)
- **Glassmorphism** cards with gradient accents
- **Responsive** layout (mobile, tablet, desktop)
- **SEO** optimized meta tags
- **Download Resume** button
- **Contact form** ready for integration

## 🛠️ Tech Stack

- **Next.js 15** (App Router, Turbopack)
- **React 19**
- **Vanilla CSS** with custom properties
- **Inter** font (Google Fonts)

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import in [vercel.com](https://vercel.com)
3. Deploy — zero config needed

### Netlify

1. Push to GitHub
2. Import in [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

## 📝 Customization

- **Update personal info**: Edit text in components under `components/`
- **Add projects**: Edit the `projects` array in `components/Projects.js`
- **Add experience**: Edit the `experiences` array in `components/Experience.js`
- **Contact form**: Integrate with [Formspree](https://formspree.io), [EmailJS](https://emailjs.com), or your backend
- **Resume**: Place your PDF in `public/resume.pdf` and update the download link
- **Social links**: Update URLs in `Contact.js` and `Footer.js`
