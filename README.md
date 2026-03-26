# 🚀 TODOX - Task Management App

![React](https://img.shields.io/badge/React-19-blue)
![Vite](https://img.shields.io/badge/Vite-8-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC)
![License](https://img.shields.io/badge/license-MIT-green)

A modern and simple **Task Management Web App** built with:

* ⚛️ React (Vite)
* 🎨 TailwindCSS
* 🧩 shadcn/ui
* 🔔 Sonner (Toast)
* 🌐 Axios (API)

---

## 🌍 Live Demo

👉 **Try it here:**
🔗 https://todox-gpww.onrender.com/

---


## 📸 Demo

👉 *Add your screenshot here*

---

## 🚀 Getting Started

### 1. Clone repository

```bash
git clone https://github.com/your-username/TODOX.git
cd TODOX/frontend
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Run development server

```bash
npm run dev
```

👉 Open browser:

```
http://localhost:5173/
```

---

## ⚙️ Configuration

### 🔹 Alias (`@` → `src`)

If you see error:

```
Failed to resolve import "@/..."
```

👉 Check `vite.config.js`:

```js
import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

---

## 🎨 UI Setup (shadcn)

```bash
npx shadcn-ui@latest init
```

Add components:

```bash
npx shadcn-ui@latest add button
```

---

## 📁 Project Structure

```
src/
 ├── components/
 ├── pages/
 ├── lib/
 ├── assets/
 ├── App.jsx
 └── main.jsx
```

---

## ✨ Features

* ✅ Add / Edit / Delete tasks
* ✅ Filter tasks (active / completed)
* ✅ Pagination
* ✅ Date filtering
* ✅ Toast notifications
* ✅ Modern UI (Tailwind + shadcn)

---

## ⚠️ Troubleshooting

### ❌ Router error

```
Failed to resolve import "react-router"
```

👉 Fix:

```bash
npm install react-router-dom
```

---

### ❌ Toast not showing

👉 Make sure:

```js
import { Toaster } from "sonner";

<Toaster position="bottom-right" />
```

---

### ❌ Blank screen

```bash
rm -rf node_modules
rm package-lock.json
npm install
npm run dev
```

---

### ❌ Alias not working

```bash
npm run dev
```

---

## 🛠 Requirements

* Node.js >= 18
* npm >= 9

---

## 🌍 Deployment

### Deploy with Vercel

```bash
npm run build
```

Then upload to:

👉 https://vercel.com/

---

## 👨‍💻 Author


