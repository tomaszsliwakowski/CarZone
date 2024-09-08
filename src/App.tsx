import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import { Layout, RequireAuth } from "./routes/layout/layout";
import Homepage from "./routes/homePage/homepage";
import NotFound from "./routes/notFoundPage/notFound";
import AuthPage from "./routes/authPage/authPage";
import SellPage from "./routes/CreateOfferPage/createOfferPage";
import { AuthContextProvider } from "./context/authContext";
import ProfilePage from "./routes/profilePage/profilePage";
import SingleOfferPage from "./routes/SingleOfferPage/singleOfferPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Homepage /> },
        { path: "/auth", element: <AuthPage /> },
        { path: "/offer/:name/:id", element: <SingleOfferPage /> },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        { path: "/create-offer", element: <SellPage /> },
        { path: "/profile", element: <ProfilePage /> },
      ],
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
