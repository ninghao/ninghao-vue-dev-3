<template>
  <div class="post-list-item">
    <h3>
      <router-link :to="{ name: 'postShow', params: { postId: item.id } }">
        {{ item.title }}
      </router-link>
    </h3>
    - <small>{{ item.user.name }}</small>
  </div>
</template>

<script>
export default {
  name: 'PostListItem',

  props: {
    item: Object,
  },
};
</script>
