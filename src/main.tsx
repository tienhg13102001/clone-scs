import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import router from "./pages/Routes";
import "./i18n";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
