import axios from "axios";

const baseAxios = axios.create({
  baseURL: "https://front-end-task.bmbzr.ir",
  withCredentials: true,
});

export default baseAxios;
