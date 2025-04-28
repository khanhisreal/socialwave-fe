import { Navigate } from "react-router-dom";
import { getAuthToken } from "../util/auth";
import AuthenticationPage from "./Authentication/Authentication";

export default function AuthRedirect() {
  const token = getAuthToken();

  return token ? <Navigate to={"/newsfeed"} replace /> : <AuthenticationPage />;
}
