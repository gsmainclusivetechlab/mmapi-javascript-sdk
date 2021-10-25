import axios from "axios";
import qs from "qs";
const GSMA_TOKEN_URL = process.env.GSMA_TOKEN_URL;

export default ({ username, pass, onSuccess, onFailure }) => {
  const base64Data = window.btoa(`${username}:${pass}`);
  axios
    .post(
      GSMA_TOKEN_URL,
      qs.stringify({
        grant_type: "client_credentials",
      }),
      {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${base64Data}`,
        },
      }
    )
    .then((res) => {
      onSuccess(res.status, res.data);
    })
    .catch((err) => {
      onFailure(err);
    });
};
