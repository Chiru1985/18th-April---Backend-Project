# 💥 WWE Hyper Stars - Fullstack App

Welcome to **WWE Hyper Stars**, a fullstack CRUD application built using **MongoDB**, **Express**, and **React**. This app showcases a collection of famous WWE wrestlers from 2001–2002 and allows users to manage them — add, edit, or delete wrestler entries. This version features a fully custom-built backend API, dark mode UI, login protection, Mongoose validation, and GDPR-compliant tracking.

---

## 🛠 Tech Stack

- **Frontend:** React, JavaScript, CSS (no Tailwind)
- **Backend:** Express.js, MongoDB, Mongoose
- **Tracking:** Google Analytics with Cookie Consent
- **Security:** Input validation, error handling, rate limiting (helmet, express-rate-limit)

---

## ⚙️ Features

- Add new WWE stars
- Edit or delete existing stars
- Login system (local demo)
- Dark mode theme
- Fully responsive layout with grid-based cards
- Form validation (frontend + backend with error display)
- Google Analytics tracking **only after consent**
- Backend connected to MongoDB Compass database

---

## 📡 API Overview

- **GET** `/api/wrestlers` – Retrieve all wrestlers  
- **POST** `/api/wrestlers` – Add a new wrestler  
- **PUT** `/api/wrestlers/:id` – Edit existing wrestler  
- **DELETE** `/api/wrestlers/:id` – Remove wrestler  

> The API uses appropriate status codes: `200 OK`, `201 Created`, `400 Bad Request`, `404 Not Found`, `500 Server Error`.

---

## 🛡️ Security & Validation

- Inputs are validated with **Mongoose Schema validation**
- Required fields: name, height, weight, brand (Raw or SmackDown), signature move
- Enum validation restricts `brand` to only "Raw" or "SmackDown"
- Graceful error messages shown to users on invalid input

### Common Threats & Mitigations

1. **Invalid data insertion (Injection risk)**: Prevented with Mongoose schema validation and explicit field control.
2. **Overposting/Mass assignment**: Only defined schema fields are stored.
3. **Mitigated**: Express middleware and error handling guards against malformed input. Rate limiting is applied to prevent brute force.

---

## 📈 Performance Optimization

Performance was optimized using **React DevTools** and **Chrome Lighthouse**.

- Reduced unnecessary re-renders via `useEffect` dependencies
- Conditionally mounted components (like the form) only when needed
- Minimized unnecessary prop changes

---

## ♿ Accessibility & SEO

This app includes:

- ✅ Proper label associations (`htmlFor` + `id`) on all form fields for screen reader accessibility
- ✅ Dark mode with good contrast
- ✅ Semantic HTML structure for inputs and buttons
- ✅ Forms are keyboard-navigable and responsive

---

## 🔍 Tracking & Privacy

- Google Analytics (`G-6XPXG0F1VM`) is used **only after user consents**
- Users are shown a **cookie consent banner**
- If declined, analytics is **not loaded**
- This makes the app **GDPR compliant**

---

## 🔐 Login Credentials (for testing)

- Username: *Anything*
- Password: *Anything*
- No sensitive authentication — demo only

---

## 📁 Folder Structure (Simplified)

```
/wwe-frontend
  /components
    - Navbar.jsx
    - WrestlerForm.jsx
    - WrestlerList.jsx
    - WrestlerCard.jsx
    - Login.jsx
  /api
    - api.js
  App.jsx
  index.css
  index.html
  main.jsx

/wwe-backend
  /models
    - Wrestler.js
  /routes
    - Wrestlers.js
  server.js
  .env
```

---

## ✅ How to Run

```bash
# Frontend
cd wwe-frontend
npm install
npm run dev

# Backend
cd wwe-backend
npm install
npm run dev
```

---

Built as part of a fullstack course project with a focus on secure CRUD operations, accessibility, and compliance.