import axios from "axios";

export const api = axios.create({
  baseURL: "https://vault.felixtech.dev/api/v1",
});
