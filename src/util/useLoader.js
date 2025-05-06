import { redirect } from "react-router-dom";
import { getUserToken } from "./auth";
import api from "../api/api";

export async function useLoader() {
  const token = getUserToken();

  if (!token) {
    return redirect("/");
  }

  try {
    const response = await api.get(`/api/users/fetch/${token.sub}`);

    const userData = {
      userId: response.data.userId,
      userName: response.data.userName,
      name: response.data.name,
      bio: response.data.bio,
      avatarSource: response.data.avatarSource,
      followerCount: response.data.followerCount,
      followingCount: response.data.followingCount,
    };

    return userData;
  } catch (error) {
    console.error("Failed to fetch user data", error);
    return redirect("/");
  }
}
