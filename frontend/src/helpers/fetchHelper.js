import axios from "axios";
import { getAccessToken } from "../accessToken";

async function fetchWithAuthentication(url, method, body, withCredentials) {
  let response = await axios({
    method: method,
    url: url,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getAccessToken()
    },
    withCredentials: withCredentials,
    data: body
  });
  // setAccessToken(response.headers["access-token"]);

  return response.data;
}

const exportFunctions = {
  fetchWithAuthentication
};

export default exportFunctions;
