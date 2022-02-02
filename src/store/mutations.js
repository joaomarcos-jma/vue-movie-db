const mutations = {
  GENDER_DATA(state, payload) {
    state.genres = payload;
  },
  MOVIES_MOST_POPULAR(state, payload) {
    state.popularMovies = payload;
  },
  MOVIES_UPCOMING(state, payload) {
    state.upcomingMovies = payload;
  },
  MOVIES_TOP_RATED(state, payload) {
    state.topRatedMovies = payload;
  },
  STORAGE_MOVIES_INIT(state, payload) {
    if (state[payload].results) {
      state[payload].results = null;
    }
  },
};

export default mutations;
