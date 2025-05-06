import { deleteCookie, getCookie, setCookie } from "./CookieConfig";
import { jwtDecode } from "jwt-decode";

export function setAuthToken(token, daysToLive) {
  setCookie(token, daysToLive);
}

//getAuthToken: return the raw JWT token from the cookie
export function getAuthToken() {
  const token = getCookie("token");
  return token;
}

export function handleLogout() {
  deleteCookie("token");
}

//userToken: a decoded JWT token
export function getUserToken() {
  const token = getAuthToken();

  if (!token) return null;

  try {
    return jwtDecode(token);
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
}
