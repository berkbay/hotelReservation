import apiClient from "./apiClient";
import { User } from "../screens/AuthFlow/types";

export const registerService = (data: User) => {
  return apiClient.post("/register", data);
};

export const loginService = (data: User) => {
  return apiClient.post("/login", data);
};
