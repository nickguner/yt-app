import axios from "axios";

const KEY = "AIzaSyAq9YrmGwZYODY0B8dtooPGXjL4bwEp9Pc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
