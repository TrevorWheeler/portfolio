import axios from "axios";

export default () => {
  return axios.create({
    baseURL: "http://localhost:8081",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.token
    }
  });
};
