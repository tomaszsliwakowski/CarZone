import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import Layout from "./routes/layout/layout";
import Homepage from "./routes/homePage/homepage";
import NotFound from "./routes/notFoundPage/notFound";
import AuthPage from "./routes/authPage/authPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Homepage /> },
        { path: "/auth", element: <AuthPage /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
