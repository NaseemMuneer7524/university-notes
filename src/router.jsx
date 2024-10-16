import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./Pages/HomePage/index";
import LoginPage from "./Pages/authentication/login";
import RegistrationPage from "./Pages/authentication/registration";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/home", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegistrationPage /> },
]);
