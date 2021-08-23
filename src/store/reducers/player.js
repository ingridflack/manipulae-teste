const PLAYER_INITIAL_STATE = {
  isPaused: false,
  isPlaying: false,
  currentTrack: undefined,
};

const playerReducer = (state = PLAYER_INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_IS_PLAYING":
      return {
        ...state,
        isPlaying: action.isPlaying,
      };
    case "SET_CURRENT_TRACK":
      return {
        ...state,
        currentTrack: action.currentTrack,
      };
    default:
      return state;
  }
};

export default playerReducer;
