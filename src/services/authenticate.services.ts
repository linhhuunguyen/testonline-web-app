import axiosClient from "src/api/axios-client";
import { LoginType, SignUpType } from "src/types/authenticate.type";

export const authenticateService = {
  async signUp(value: SignUpType): Promise<any> {
    const { data } = await axiosClient.post("/user/signup", value);
    return data;
  },
  async loginService(value: LoginType): Promise<any> {
    const { data } = await axiosClient.post("/auth/login", value);
    return data;
  },
};
