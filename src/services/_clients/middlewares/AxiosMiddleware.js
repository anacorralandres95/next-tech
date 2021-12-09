import axios from "../Api";

export const AxiosMiddleware = () => {
  axios.interceptors.request.use(async (config) => {
    try {
      return config;
    } catch (err) {
      return config;
    }
  });

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return (next) => (action) => next(action);
};
