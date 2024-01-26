import { RouterProvider } from "react-router-dom";
import { Router } from "./routers/default.routers";

function App() {
  return (
    <div className="App">
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
