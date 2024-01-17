import { createBrowserRouter } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Content from "../components/content";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Sidebar />,
    children: [
      {
        path: "signin",
        element: <Content />,
      },
      {
        path: "signup",
        element: <div>Signup</div>,
      },
    ],
  },
]);
