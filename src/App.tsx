import { RouterProvider } from "react-router-dom";
import { Router } from "./routers/default.routers";

function App() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-5xl">
        <RouterProvider router={Router} />
      </div>
    </div>
  );
}

export default App;
