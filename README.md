# 📱 RCS Appointment Reminder (UI)
 
A clean, modern **React + Vite** front-end to compose and preview **RCS (Rich Communication Services)** appointment reminders — supporting **Basic Text**, **Card**, and **Carousel** templates with a live phone mock preview.
 
[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?logo=vite)](https://vitejs.dev/)

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)

[![Chakra UI](https://img.shields.io/badge/Chakra_UI-3.x-319795?logo=chakraui)](https://chakra-ui.com/)

[![Ant Design](https://img.shields.io/badge/Ant_Design-5.x-1677FF?logo=antdesign)](https://ant.design/)

[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-0055FF?logo=framer)](https://www.framer.com/motion/)

[![ESLint](https://img.shields.io/badge/ESLint-9.x-4B32C3?logo=eslint)](https://eslint.org/)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#-license)

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#-contributing)

 
</div>
 
---
 
## ✨ Features
 
- **Template picker**: RCS **Basic Text**, **Card**, and **Carousel**.
- **Live preview**: Instant phone mock that reflects your message content.
- **Clean UX**: Built with **Chakra UI** + **Ant Design**, animated with **Framer Motion**.
- **Vite-powered**: Lightning-fast dev server, hot module replacement (HMR).
- **Linted**: ESLint config included for a consistent code style.
 
---
 
## 🖼️ Screenshot / Demo
 
> Replace the path below with your image in the repo (e.g., `docs/rcs-preview.png`).
 
<p align="center">
  <img src="docs/rcs-preview.png" alt="RCS Appointment Reminder - Preview" width="900">
</p>
 
---
 
## 🚀 Quick Start
 
> Requires **Node.js 18+** and **pnpm / npm / yarn**.
 
```bash
# 1) Clone
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
 
# 2) Install
npm install
 
# 3) Run dev
npm run dev
 
# 4) Build for prod
npm run build
 
# 5) Preview build
npm run preview
```
 
> The dev server URL will be printed in your terminal (usually `http://localhost:5173`).
 
---
 
## 🧰 Tech Stack
 
- **React 19**, **Vite 7**
- **Chakra UI**, **Ant Design**
- **Framer Motion** animations
- **ESLint 9** with React Hooks & React Refresh plugins
 
---
 
## 📦 Scripts
 
| Script        | Description                     |
|---------------|---------------------------------|
| `npm run dev` | Start Vite dev server (HMR)     |
| `npm run build` | Build production bundle         |
| `npm run preview` | Preview production build       |
| `npm run lint` | Run ESLint over the project     |
 
---
 
## 📁 Suggested Project Structure
 
> Your actual structure may vary. This is a helpful baseline.
 
```
rcs-hackathon-ui/
├─ public/                 # Static assets
├─ src/
│  ├─ components/          # UI components (forms, preview phone, etc.)
│  ├─ features/            # RCS templates (Basic, Card, Carousel)
│  ├─ hooks/               # Custom hooks
│  ├─ pages/               # Top-level screens
│  ├─ styles/              # Theme overrides
│  └─ main.jsx             # App entry
├─ docs/
│  └─ rcs-preview.png      # Screenshots for README
├─ package.json
└─ vite.config.js
```
 
---
 
## ⚙️ Configuration Notes
 
- The UI is framework-only — **no backend required** for previewing messages.
- If you integrate APIs later, consider adding an `.env` section:
  ```bash
  VITE_API_BASE_URL=https://api.example.com
  ```
 
---
 
## 🧪 Development Tips
 
- Keep components small and **composable**.
- Use Chakra UI for layout & theming, Ant Design for **data-entry** components.
- Animate interactions with Framer Motion (subtle is better than flashy).
- Prefer **controlled inputs** so the preview stays in sync with the form state.
 
---
 
## 🤝 Contributing
 
Contributions are welcome!  
1. Fork the repo & create a new branch.  
2. Make your change with tests or stories if applicable.  
3. Submit a PR with a clear description and screenshots for UI changes.
 
---
 
## 🛡️ License
 
This project is licensed under the **MIT License**. See `LICENSE` for details.
 
---
 
## 🌟 Acknowledgements
 
- Built with ❤️ using **React** and **Vite**.
- UI powered by **Chakra UI** and **Ant Design**.
- Smooth transitions thanks to **Framer Motion**.
 
---
 
## 🔗 Useful Links
 
- [Vite Docs](https://vitejs.dev/guide/)
- [React Docs](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/docs/getting-started)
- [Ant Design](https://ant.design/docs/react/introduce)
- [Framer Motion](https://www.framer.com/motion/)
