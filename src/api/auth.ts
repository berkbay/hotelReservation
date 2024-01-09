import apiClient from "./apiClient";
import { User } from "../screens/AuthFlow/types";

export const registerService = (data: User) => {
  return apiClient.post("/register", data);
};
