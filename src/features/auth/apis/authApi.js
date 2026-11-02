import { axiosInstance } from "../../../config/axiosInstance";

export const logoutApi = async () => {
  try {
    let res = await axiosInstance.post("/auth/logout");
    return res;
  } catch (error) {
    console.error("error in logout api", error);
  }
};
