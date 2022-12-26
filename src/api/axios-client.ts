import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import { API_BASE_URL } from "src/constants/path.api";

let isShowingError = false;

const axiosClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  (request: AxiosRequestConfig) => {
    return request;
  },
  async (error) => await Promise.reject(error)
);

axiosClient.interceptors.response.use(
  (response: AxiosResponse<any>) => response,
  async (error) => {
    const regex = /(5)/g;
    const status = error?.response?.status;
    const data = error?.response?.data;

    if (!status || regex.test(status)) {
      if (!isShowingError) {
        console.log("error");

        isShowingError = true;
      } else {
        setTimeout(() => {
          isShowingError = false;
        }, 2000);
      }
    } else if (status === 401 || data.message === "Unauthorized") {
      console.log("error", data.message);
    } else if (error.message === "Network Error" && error.response) {
      console.log("error", error.response);
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
