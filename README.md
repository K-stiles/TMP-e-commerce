# 🛒 TMP - E-commence application

A responsive multi-page e-commerce website built with Vite, TypeScript, React, and Sass CSS. The project features product browsing, cart management, a checkout form with validation, and order confirmation—all while maintaining a clean and accessible UI.

## 🔗 Live Demo

👉 [View Live Site](https://tmp-e-commerce.vercel.app/headphones)

## 🧰 Tech Stack

- ⚡️ [Vite](https://vitejs.dev/) – fast development and build tool
- ⚛️ [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- 🎨 [Sass CSS](https://sasscss.com/) – styling library
- 🧭 [React Router DOM](https://reactrouter.com/) – client-side routing
- 🧠 [Zustand](https://zustand-demo.pmnd.rs/) – global state management (cart)
- ✅ [React Hook Form](https://react-hook-form.com/) – form handling & validation
- 📦 [Axios](https://axios-http.com/) – HTTP requests (optional for product data)

## ✨ Features

- 📱 Fully responsive design (mobile, tablet, desktop)
- 🛍 Product listing and detailed product pages
- 🛒 Cart system with add/remove/update functionality
- 🧾 Checkout form with validation and error handling
- 💰 VAT (20%) and fixed shipping ($50) calculated in totals
- 📦 Order summary modal after successful checkout
- 💾 Cart state persisted via `localStorage`
- 🔁 Smooth navigation across multiple pages

## 📂 Folder Structure

```
src/
│
├── assets/ # Images and static media
├── components/ # UI elements (Cart, Header, Modal, etc.)
├── pages/ # Route-based pages (Home, Product, Checkout)
├── store/ # Zustand store for cart state
├── utils/ # Helper functions (VAT, formatting)
├── hooks/ # Custom hooks
├── App.tsx # App layout and routes
└── main.tsx # Vite entry point
```

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/K-stiles/TMP-e-commerce.git
cd TMP-e-commerce
```

2. Install dependencies

```
pnpm install
```

3.Run the app locally

```
pnpm dev

```

4. Build for production

```
pnpm build
```

5. Preview production build

```
pnpm preview
```

## 🧪 Test Manually

- Add, remove, and update product quantities in the cart
- Try form submission with incomplete and incorrect fields
- Refresh the page to test cart state persistence
- Navigate across all pages to check for layout consistency
- Verify VAT (20%) and shipping ($50) are calculated correctly

## 🛠 Deployment

This project is deployed with Vercel.
