<template>
  <div class="post-list-item">
    <h3>{{ item.title }}</h3>
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
