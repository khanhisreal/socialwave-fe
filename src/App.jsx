import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import PersonalWall from "./pages/PersonalWall/PersonalWall";
import NewsFeed from "./pages/NewsFeed/NewsFeed";
import ErrorPage from "./pages/Error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <NewsFeed /> },
      { path: "/wall", element: <PersonalWall /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
