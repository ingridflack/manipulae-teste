const DEFAULT_TRACKS_PAGINATION = {
  skip: 0,
  limit: 25,
  hasMore: true,
};

const TRACKS_INITIAL_STATE = {
  search: {
    input: "",
    results: [],
    pagination: { ...DEFAULT_TRACKS_PAGINATION },
  },
  topTracks: [],
  favoriteTracks: [],
};

const tracksReducer = (state = TRACKS_INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_TOP_TRACKS_SUCCESS":
      return {
        ...state,
        topTracks: action.tracks,
      };
    case "SEARCH_INPUT_CHANGE":
      return {
        ...state,
        search: {
          ...state.search,
          input: action.input,
          results: [],
          pagination: { ...DEFAULT_TRACKS_PAGINATION },
        },
      };
    case "FETCH_SEARCH_RESULTS_SUCCESS":
      return {
        ...state,
        search: {
          ...state.search,
          results: [...state.search.results, ...action.results],
          pagination: {
            ...state.search.pagination,
            skip: state.search.pagination.skip + action.results.length,
            hasMore: action.results.length === state.search.pagination.limit,
          },
        },
      };
    case "ADD_FAVORITE_TRACK":
      return {
        ...state,
        favoriteTracks: [...state.favoriteTracks, action.track],
      };
    case "REMOVE_FAVORITE_TRACK":
      return {
        ...state,
        favoriteTracks: state.favoriteTracks.filter((track) => {
          return track.id !== action.track.id;
        }),
      };
    default:
      return state;
  }
};

export default tracksReducer;
