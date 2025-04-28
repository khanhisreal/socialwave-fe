import { Navigate, Outlet } from "react-router-dom";
import { getAuthToken } from "../util/auth";

export default function RequireAuth() {
  const token = getAuthToken();

  return token ? <Outlet /> : <Navigate to={"/"} replace />;
}
