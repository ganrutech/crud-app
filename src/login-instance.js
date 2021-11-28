import Axios from "axios";
import { baseUrl } from "./config";

const loginAxios = Axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

loginAxios.interceptors.request.use(
  async (request) => {
    // const session = await getSession();
    // if (session?.accessToken) {
    //   request.headers.Authorization = `Bearer ${session.accessToken}`;
    // }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

loginAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default loginAxios;
