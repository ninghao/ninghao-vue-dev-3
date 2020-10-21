<template>
  <h1>{{ appName }}</h1>
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      appName: '宁皓网',
    };
  },
};
</script>
