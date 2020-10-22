<template>
  <div class="post-list">
    <PostListItem v-for="item in posts" :key="item.id" :item="item" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { apiHttpClient } from '@/app/app.service';
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
    async getPosts() {
      try {
        // 请求内容列表接口
        const response = await apiHttpClient.get('/posts');

        // 设置组件的数据
        this.posts = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },

  components: {
    PostListItem,
  },
};
</script>
