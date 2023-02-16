import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/Login',
    component: () => import ('../../views/login/index.vue')
  }
]

export default routes