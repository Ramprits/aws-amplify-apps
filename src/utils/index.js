import axios from "axios";
export const axiosInstance = axios.create({
    baseURL: ""
});

// axiosInstance.interceptors.request.use((request) => {
//     const token = localStorage.getItem(TOKEN_KEY);
//     if (token) {
//         if (request.headers) {
//             request.headers["Authorization"] = `Bearer ${token}`;
//         } else {
//             request.headers = {
//                 Authorization: `Bearer ${token}`,
//             };
//         }
//     }

//     return request;
// });