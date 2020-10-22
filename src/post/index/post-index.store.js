export const postIndexStoreModule = {
  namespaced: true,

  state: {
    loading: false,
    posts: [],
  },

  getters: {
    loading(state) {
      return state.loading;
    },

    posts(state) {
      return state.posts;
    },
  },
};
