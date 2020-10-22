<template>
  <div class="post-list">
    <PostListItem v-for="item in posts" :key="item.id" :item="item" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import PostListItem from './post-list-item.vue';

export default {
  computed: {
    ...mapGetters({
      loading: 'post/index/loading',
      posts: 'post/index/posts',
    }),
  },

  created() {
    // 获取内容列表数据
    this.getPosts();
  },

  methods: {
    ...mapActions({
      getPosts: 'post/index/getPosts',
    }),
  },

  components: {
    PostListItem,
  },
};
</script>
