// main.tsx or main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { myRouter } from "./Router/Router";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={myRouter}>
    <App />
    </RouterProvider>
  </React.StrictMode>
);
