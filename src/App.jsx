import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import PersonalWall from "./pages/PersonalWall/PersonalWall";
import NewsFeed from "./pages/NewsFeed/NewsFeed";
import ErrorPage from "./pages/Error/ErrorPage";
import { action as authAction } from "./pages/Authentication/Authentication";
import RequireAuth from "./pages/RequireAuth";
import UserContextProvider from "./store/UserContext";
import AuthRedirect from "./pages/AuthRedirect";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <AuthRedirect />, action: authAction },
      {
        element: <RequireAuth />,
        children: [
          { path: "newsfeed", element: <NewsFeed /> },
          { path: "wall", element: <PersonalWall /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
}

export default App;
