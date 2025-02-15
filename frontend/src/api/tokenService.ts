import axios from "axios";

let failedQueue: Array<{ resolve: Function; reject: Function }> = [];

export const addToQueue = (request: any) => {
  return new Promise((resolve, reject) => {
    failedQueue.push({ resolve, reject });
  })
    .then((token) => {
      request.headers.Authorization = `Bearer ${token}`;
      return axios(request);
    })
    .catch((err) => Promise.reject(err));
};

export const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((promise) => {
    if (token) {
      promise.resolve(token);
    } else {
      promise.reject(error);
    }
  });

  failedQueue = [];
};
