import axios from 'axios';
export default axios.create({
  baseURL: process.env.GSMA_BASE_URL_AUTH,
});
