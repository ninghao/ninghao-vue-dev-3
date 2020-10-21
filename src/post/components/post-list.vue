<template>
  <div class="post-list">
    <div class="post-list-item" v-for="item in posts" :key="item.id">
      <h3>{{ item.title }}</h3>
      - <small>{{ item.user.name }}</small>
    </div>
  </div>
</template>

<script>
import { apiHttpClient } from '@/app/app.service';

export default {
  data() {
    return {
      posts: [],
    };
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
};
</script>
