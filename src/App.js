import { RouterProvider } from "react-router-dom";
import { Routing } from "./Components/RouterProvider/RouterProvider";
import "animate.css";
function App() {
  return <div className="App">
    <RouterProvider router={Routing} />
  </div>;
}

export default App;
