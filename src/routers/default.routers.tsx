import { createBrowserRouter } from "react-router-dom";
import Sidebar from "../components/sidebar";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Sidebar />,
  },
]);
