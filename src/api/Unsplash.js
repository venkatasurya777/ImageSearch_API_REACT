import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID xFc0cTYSDjZyyssV8MMsaSvuJysOtVcuUtfgck3W4W4",
  },
});
