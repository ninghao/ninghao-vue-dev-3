import { postIndexStoreModule } from './index/post-index.store';

export const postStoreModule = {
  namespaced: true,

  modules: {
    index: postIndexStoreModule,
  },
};
