import { createBrowserRouter } from "react-router-dom";
// import Sidebar from "../components/sidebar";
import Home from "../pages/home";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
