# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# RTK Todo App (RTK Query) ✅

A simple Todo app built with *React + Redux Toolkit (RTK Query)*.  
It performs *CRUD* operations (Create, Read, Update, Delete) using a *cloud API (MockAPI)* and is deployed on *Netlify*.

---

## ✨ Features

- Fetch tasks using *RTK Query*
- Add new task
- Toggle complete / incomplete
- Delete task
- Loading & error states
- Deployed frontend (Netlify) + online backend (MockAPI)

---

## 🧰 Tech Stack

- React (Vite)
- Redux Toolkit
- RTK Query
- MockAPI (REST backend)
- Netlify (deployment)

---

## 🌐 Live Demo

- Live Site:https://rtk-todoapp.netlify.app/
- API Base URL: https://698a5634c04d974bc6a1fb01.mockapi.io
- Resource: /tasks

---

## 📌 API Endpoints

- GET /tasks → get all tasks  
- POST /tasks → create a task  
- PUT /tasks/:id → update a task  
- DELETE /tasks/:id → delete a task  

Example Task shape:

```json
{
  "id": "e775",
  "value": "Complete RTK Query",
  "completed": true
}

🚀 Run Locally

Install dependencies:
npm install
Start dev server:
npm run dev
