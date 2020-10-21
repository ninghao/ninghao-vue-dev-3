<template>
  <h1>{{ appName }}</h1>
  <PostList />
</template>

<script>
import PostList from '@/post/components/post-list.vue';

export default {
  data() {
    return {
      appName: '宁皓网',
    };
  },

  components: {
    PostList,
  },
};
</script>
