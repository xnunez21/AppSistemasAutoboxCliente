import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/Forgot'
  },
  {
    path: '/Forgot',
    component: () => import ('../../views/forgot/index.vue')
  }
]

export default routes