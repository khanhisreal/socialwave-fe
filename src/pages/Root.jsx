import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";

export default function Root() {
  const location = useLocation();

  //Hide the header only on the authentication page
  const hideHeader = location.pathname === "/";

  return (
    <>
      {!hideHeader && <Header />}
      <Outlet />
    </>
  );
}
