import axios from "../config/api";
import { store } from "../store";

export const searchTracks = () => {
  const { search } = store.getState().tracks;

  axios
    .get(`/search?q=${search.input}&index=${search.pagination.skip}`)
    .then((response) => {
      store.dispatch({
        type: "FETCH_SEARCH_RESULTS_SUCCESS",
        results: response.data.data,
      });
    })
    .catch((error) => {});
};
