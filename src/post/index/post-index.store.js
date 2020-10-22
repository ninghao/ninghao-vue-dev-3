import { apiHttpClient } from '@/app/app.service';

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

  actions: {
    async getPosts({ commit }) {
      commit('setLoading', true);

      try {
        const response = await apiHttpClient.get('/posts');
        commit('setLoading', false);
        commit('setPosts', response.data);

        return response;
      } catch (error) {
        commit('setLoading', false);

        throw error;
      }
    },
  },
};
