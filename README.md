# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Struktur Website Profile Politeknik Baja Tegal (Capybara Team)

web-profile-pbjt/
│
├── server.js                                      # 🚀 Entry utama: Express serve API + React build
│
├── backend/                                       # ⚙️ Backend API (Express)
│   │
│   ├── data/                                      # Folder data statis JSON
│   │   └── mitra.json                             # Data mitra Politeknik Baja Tegal
│   │
│   ├── controllers/                               # Folder logika bisnis (Controller)
│   │   └── mitraController.js                     # Fungsi ambil data dari mitra.json
│   │
│   ├── routes/                                    # Folder routing API
│   │   └── mitraRoutes.js                         # Endpoint /api/mitra
│   │
│   └── package.json (opsional, jika backend dikelola terpisah)
│
│
├── frontend/                                      # 🌐 Frontend React (Vite + Tailwind)
│   │
│   ├── public/                                    # File publik (akses langsung)
│   │   ├── data/
│   │   │   ├── karir.json                         # Data karir lulusan
│   │   │   └── mitra.json                         # Data dummy, bisa disamakan dengan backend
│   │   ├── vite.svg                               # Logo default
│   │   └── favicon.ico                            # Ikon tab browser
│   │
│   ├── src/                                       # Source utama React
│   │   ├── assets/                                # Gambar, ikon, font
│   │   │   ├── logo.png
│   │   │   ├── hero.jpg
│   │   │   └── icons/
│   │   │       ├── facebook.svg
│   │   │       ├── instagram.svg
│   │   │       └── linkedin.svg
│   │   │
│   │   ├── components/                            # Komponen reusable
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── Prospek.jsx
│   │   │   └── Partners.jsx                       # Fetch data dari /api/mitra
│   │   │
│   │   ├── pages/                                 # Halaman utama (routing)
│   │   │   ├── Home.jsx
│   │   │   ├── NotFound.jsx
│   │   │   ├── Karir.jsx
│   │   │   └── Mitra.jsx
│   │   │
│   │   ├── styles/
│   │   │   └── globals.css
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── tailwind.config.js
│   ├── vite.config.js
│   ├── postcss.config.js
│   ├── package.json
│   ├── eslint.config.js
│   ├── .gitignore
│   └── README.md
│
│
├── package.json                                 # 📦 Root config untuk Express server
├── .gitignore                                   # Abaikan node_modules, dist, .env, dll.
└── README.md                                    # Dokumentasi proyek
