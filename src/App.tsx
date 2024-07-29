import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import { Layout, RequireAuth } from "./routes/layout/layout";
import Homepage from "./routes/homePage/homepage";
import NotFound from "./routes/notFoundPage/notFound";
import AuthPage from "./routes/authPage/authPage";
import SellPage from "./routes/sellPage/sellPage";
import { AuthContextProvider } from "./context/authContext";

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
    {
      path: "/",
      element: <RequireAuth />,
      children: [{ path: "/sell", element: <SellPage /> }],
    },
    { path: "*", element: <NotFound /> },
  ]);
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;
