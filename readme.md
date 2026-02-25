# 🙏 Namaste — Welcome to **edvixo-ui**

**edvixo-ui** is a reusable UI component library built for modern **Next.js Microfrontend Applications**.

It provides production-ready components powered by **React + Tailwind CSS** that can be shared across multiple apps, repositories, and deployments.

---

# 📦 NPM Package

👉 https://www.npmjs.com/package/edvixo-ui

Install:

```bash
npm install edvixo-ui
```

or

```bash
yarn add edvixo-ui
```

---

# 🚀 For Users (Using edvixo-ui in Your App)

## 1️⃣ Install Package

```bash
npm install edvixo-ui
```

---

## 2️⃣ Requirements

Your project must have:

* ✅ Next.js 14+
* ✅ React 18+
* ✅ Tailwind CSS installed

---

## 3️⃣ Configure Next.js

`next.config.ts`

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["edvixo-ui"],
};

export default nextConfig;
```

Restart server after adding this.

---

## 4️⃣ Tailwind Setup (Important)

Make sure Tailwind scans the library components.

Tailwind v4 users:

`app/globals.css`

```css
@import "tailwindcss";

/* allow Tailwind to detect classes from edvixo-ui */
@source "../node_modules/edvixo-ui/dist";
```

---

## 5️⃣ Use Components

```tsx
import { StepsProduct } from "edvixo-ui";

export default function Page() {
  return <StepsProduct />;
}
```

✅ Styles apply automatically
✅ No CSS imports required

---

# 🧑‍💻 For Contributors

We welcome contributions 🙌

---

## 1️⃣ Clone Repository

```bash
git clone <repo-url>
cd edvixo-ui
npm install
```

---

## 2️⃣ Local Development Setup

Build library in watch mode:

```bash
npm run dev
```

This automatically rebuilds `/dist` when components change.

---

## 3️⃣ Link Package Locally (npm link)

### Register package globally

Inside **edvixo-ui**:

```bash
npm link
```

---

### Connect with Playground / App

Inside your testing app:

```bash
npm link edvixo-ui
```

Now the app uses your local package.

✅ Live development
✅ Instant testing

---

## 4️⃣ Develop Components

Create components inside:

```
src/components/
```

Export them from:

```
src/index.ts
```

Example:

```ts
export { default as StepsProduct } from "./components/StepsProduct";
```

---

## 5️⃣ Build Before Publishing

```bash
npm run build
```

Output will be generated in:

```
dist/
```

---

## 6️⃣ Publish New Version

Update version:

```bash
npm version patch
```

Publish:

```bash
npm publish --access public
```

---

# 🔁 Contribution Workflow

```
Create component
        ↓
Test using npm link
        ↓
Build package
        ↓
Increase version
        ↓
Publish to npm
```

---

# 🏗 Project Structure

```
edvixo-ui
│
├── src/
│   ├── components/
│   └── index.ts
│
├── dist/        (auto generated)
├── package.json
└── tsconfig.json
```

---

# 🎯 Goals of edvixo-ui

* Shared UI across microfrontends
* Reusable design system
* Independent deployments
* Clean Tailwind integration
* Zero global CSS conflicts

---

# 🤝 Contributing Guidelines

Please:

* Follow existing component patterns
* Use Tailwind utility classes
* Keep components reusable
* Avoid app-specific logic
* Test with `npm link` before publishing

---

# 🛠 Development Commands

| Command       | Purpose          |
| ------------- | ---------------- |
| npm run dev   | Watch mode build |
| npm run build | Production build |
| npm publish   | Publish package  |

---

# ❤️ Made for Microfrontend Architecture

edvixo-ui is designed for:

* Shell Applications
* Independent Micro Apps
* Multi-Repo Systems
* Cloud Deployments

---

# 🙏 Thank You

Namaste and thank you for contributing to **edvixo-ui**.

Let’s build scalable UI systems together 🚀
