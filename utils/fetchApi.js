import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";
const secretKey = process.env.RAPIDAPI_KEY;

export const fetchApi = async (url) => {
  const res = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "b8779ea455msh1c89c9de1769555p1daca0jsn4153e394d1dd",
    },
  });
  // console.log("BACKEND Test: " + res);
  return res.data;
};
