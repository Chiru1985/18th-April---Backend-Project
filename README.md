

# 💥 WWE Hyper Stars - Fullstack App

Welcome to **WWE Hyper Stars**, a fullstack CRUD application built using **MongoDB**, **Express**, and **React**. This app showcases a collection of famous WWE wrestlers from 2001–2002 and allows users to manage them — add, edit, or delete wrestler entries. This version features a fully custom-built backend API, dark mode UI, login protection, and validation!

---

## 🛠 Tech Stack

- **Frontend:** React, JavaScript, CSS (no Tailwind)
- **Backend:** Express.js, MongoDB, Mongoose
- **Tracking:** Google Analytics
- **Security:** Input validation, error handling

---

## ⚙️ Features

- Add new WWE stars
- Edit or delete existing stars
- Login system (local demo)
- Dark mode theme
- Fully responsive layout
- Form validation (frontend + backend)
- Error messages for invalid inputs
- Google Analytics tracking
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
- Custom error messages are returned on invalid data
- API protected from malformed requests and invalid enum types

### Common Threats & Mitigations

1. **Invalid data insertion (Injection risk)**: All inputs are sanitized and validated using Mongoose.
2. **Overposting/Mass assignment**: Only known schema fields are stored.
3. **Mitigated**: Validation errors are handled gracefully and returned to the client with user-friendly messages.

---

## 📈 Performance Optimization

During development, performance was monitored using **React DevTools** and **Chrome Lighthouse**. Key optimizations:

- Reduced unnecessary re-renders with useEffect dependencies
- Used `useState` and `map()` effectively for efficient DOM updates
- Optimized form rendering by conditionally mounting it only when needed

---

## ♿ Accessibility & SEO

This app includes:

- High color contrast and readable fonts in dark mode
- Semantic HTML structure for headings and labels
- Accessible input labels and buttons
- Clean structure for improved SEO crawling (where applicable)

---

## 🔍 Tracking & Privacy

- Google Analytics (`G-6XPXG0F1VM`) is used to track visits and user interactions.
- Tracking does **not** collect personal or sensitive data.
- This respects user privacy and aligns with **GDPR guidelines** by using anonymized data collection.

---

## Login Credentials:-

username: anything (Free to type anything)
Password: anything (Free to type anything)

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
  main.jsx

/wwe-backend
  /models
    - Wrestler.js
  /routes
    - Wrestlers.js
  server.js
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
node server.js
```