import axios from "../config/api";

export const getTopTracks = () => {
  return axios.get("/chart/0/tracks");
};
