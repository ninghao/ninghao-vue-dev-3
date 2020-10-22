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

  mutations: {
    setLoading(state, data) {
      state.loading = data;
    },

    setPosts(state, data) {
      state.posts = data;
    },
  },
};
