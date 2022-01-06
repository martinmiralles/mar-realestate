import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";
const secretKey = process.env.RAPIDAPI_KEY;

export const fetchApi = async (url) => {
  const res = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": secretKey,
    },
  });
  // console.log("BACKEND Test: " + res);
  return res.data;
};
