# Easy-uana

<p align="center">
  <img src="./public/logo.png" alt="Easy-uana logo" width="220" />
</p>

<p align="center">
  Easy-uana is a promotional website for an iOS cannabis compliance app built for licensed growers.
  The site presents the product, explains its value, provides download access, and includes legal and contact pages.
</p>

<p align="center">
  <a href="https://easy-uana.vercel.app">Live Site</a>
</p>

## Overview

Easy-uana is designed to showcase a workflow for faster cannabis compliance management. The site highlights how the app helps growers capture RFID tag numbers, format METRC-ready data, and simplify repetitive compliance tasks.

The project is built as a single-page React application with route-based pages for:

- Home
- About
- Download
- Terms and Conditions
- Privacy Policy
- METRC notice
- Contact

## Features

- Age verification gate before entering the site
- Responsive navbar with compact multi-line navigation labels
- Product-focused landing page sections
- Download page for the iOS app
- Contact form integration
- Dedicated legal and policy pages
- Deployed with Vercel

## Tech Stack

- React
- Vite
- React Router
- Tailwind CSS
- GSAP
- EmailJS

## Screenshots

### Landing Page

<p align="center">
  <img src="./public/logo.png" alt="Easy-uana branding" width="720" />
</p>

### Website Gallery

<p align="center">
<img src="https://github.com/user-attachments/assets/d111702b-6c2c-472c-b8f8-e2e2a55072a4" width="90%" />
<img src="https://github.com/user-attachments/assets/d5c9ad65-db3d-4522-8790-2ddef49f71cb" width="90%" />
<img src="https://github.com/user-attachments/assets/fdbe3e65-f23d-4e28-abe9-1b4973fec102" width="90%" />
<img src="https://github.com/user-attachments/assets/ad9e3c73-bb8f-4551-9a3f-1b30366b2813" width="90%" />
</p>

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

## Project Structure

```text
easy-uana/
├─ public/
├─ src/
│  ├─ components/
│  ├─ constants/
│  ├─ hooks/
│  ├─ utils/
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ package.json
└─ vite.config.js
```

## Deployment

The project is configured for deployment on Vercel.

If you deploy from GitHub, make sure import paths match file names exactly. This matters on Linux-based build environments such as Vercel, where file path casing is enforced.

## Notes

- The site stores the age verification decision in `localStorage`.
- If you need to test the gate again, clear the `easy-uana-age-verification` key in the browser.

## License

This project is private unless you choose to publish it under a separate license.
