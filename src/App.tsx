import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import Layout from "./routes/layout/layout";
import Homepage from "./routes/homepage/homepage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/", element: <Homepage /> }],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
