<template>
  <div class="post-show">
    <h3>{{ post.title }}</h3>
    - <small v-if="post.user">{{ post.user.name }}</small>
  </div>
</template>

<script>
import { apiHttpClient } from '@/app/app.service';

export default {
  props: {
    postId: String,
  },

  data() {
    return {
      post: {},
    };
  },

  created() {
    this.getPostById(this.postId);
  },

  methods: {
    async getPostById(postId) {
      try {
        const response = await apiHttpClient.get(`/posts/${postId}`);
        this.post = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
