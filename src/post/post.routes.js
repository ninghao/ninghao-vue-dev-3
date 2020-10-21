import PostIndex from './index/post-index.vue';

/**
 * 定义路由
 */
const routes = [
  {
    name: 'postIndex',
    path: '/posts',
    component: PostIndex,
  },
];

/**
 * 默认导出
 */
export default routes;
