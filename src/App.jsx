import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import PersonalWall from "./pages/PersonalWall/PersonalWall";
import NewsFeed from "./pages/NewsFeed/NewsFeed";
import ErrorPage from "./pages/Error/ErrorPage";
import AuthenticationPage from "./pages/Authentication/Authentication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <AuthenticationPage /> },
      { path: "auth", element: <AuthenticationPage /> },
      { path: "newsfeed", element: <NewsFeed /> },
      { path: "wall", element: <PersonalWall /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
