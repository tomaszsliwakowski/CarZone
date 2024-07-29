import axios from "axios";

const apiRequest = axios.create({
  baseURL: "url",
  withCredentials: true,
});
export default apiRequest;
