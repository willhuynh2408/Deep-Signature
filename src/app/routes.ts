import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Verification from "./pages/Verification";
import About from "./pages/About";
import Login from "./pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "registration", Component: Registration },
      { path: "verification", Component: Verification },
      { path: "about", Component: About },
      { path: "login", Component: Login },
    ],
  },
]);
