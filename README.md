# 🌌 Futuristic Gradient Card Project

A modern, fully responsive **React + Tailwind CSS** project featuring:

* Dark/Light mode toggle
* Futuristic card with **auto-changing gradient backgrounds**
* RGB color scroll bar with **live preview**
* **6 preset gradient buttons** for quick styling
* Neon/glow effects with smooth transitions
* Fully responsive design (mobile, tablet, desktop)

---

## 🚀 Features

✅ **Dark / Light Mode** – Toggle button at the top-right corner
✅ **Futuristic Card** – Background color changes automatically with RGB scroll
✅ **RGB Scroll Bar** – Big gradient-to-r slider with a live color preview circle
✅ **Preset Buttons** – 6 one-click gradient themes for quick style changes
✅ **Animations & Glow** – Smooth hover transitions and neon-like effects
✅ **Responsive** – Works seamlessly on mobile, tablet, and desktop

---

## 🖼️ Preview

*(Insert a screenshot or demo GIF of your project here)*

---

## ⚙️ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/futuristic-gradient-card.git
   cd futuristic-gradient-card
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open in browser:

   ```
   http://localhost:5173
   ```

---

## 🛠️ Tech Stack

* **React.js** (frontend framework)
* **Tailwind CSS** (styling)
* **Vite** (fast bundler)

---

## 📂 Project Structure

```
futuristic-gradient-card/
│── public/              # Static assets
│── src/
│   ├── components/      # Reusable components (Card, ScrollBar, etc.)
│   ├── App.jsx          # Main application file
│   ├── index.css        # Tailwind styles
│   └── main.jsx         # Entry point
│── package.json
│── tailwind.config.js
│── README.md
```

---

## 🎨 Customization

* Change **default gradients** in the preset buttons section
* Update the **card text** based on your background image
* Modify Tailwind config for custom colors & glow effects

---

📦 Advanced Deployment & Local Preview
1️⃣ Local Preview of Production Build

After building your project for production, you can preview it locally before deploying:

npm run build       # Creates a production-ready dist/ folder
npm install -g serve
serve -s dist       # Preview locally at http://localhost:3000


This will simulate exactly how your app will look after deployment.

2️⃣ GitHub Pages Deployment

Make sure vite.config.js has the correct base path:

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/Color_Changer_Card/",  // Your repo name
})


Install gh-pages if not already installed:

npm install gh-pages --save-dev


Add deploy script in package.json:

"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "gh-pages -d dist"
}


Deploy to GitHub Pages:

npm run deploy


Your project will be live at:

https://your-username.github.io/Color_Changer_Card/


⚠️ Make sure the GitHub repo name matches the base path in vite.config.js.

💡 Tips & Tricks for Futuristic UI

Neon Glow Enhancement: Use box-shadow and drop-shadow in Tailwind for buttons and card edges to create realistic neon effects.

Smooth Hover Animations: Apply transition-all duration-300 ease-in-out on hover for gradients, buttons, and scroll elements.

Responsive Design: Test on multiple screen sizes; use Tailwind sm:, md:, lg: prefixes for breakpoints.

RGB Slider Control: Adjust step increments for smooth color transitions; consider onMouseMove for real-time dynamic gradient changes.

Preset Button Feedback: Add scale or glow effect on hover/click for better user engagement.

Background Gradients: Combine multiple colors with linear-gradient and opacity layers for a more futuristic feel.

🤝 Contributing

Contributions are welcome!

Fork the project

Create a new branch (feature/your-feature)

Commit changes

Submit a pull request

📜 License

This project is licensed under the MIT License – feel free to use and modify!

✨ Built with passion for futuristic UI lovers 🚀
