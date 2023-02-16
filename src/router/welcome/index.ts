import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/folder/Tutorial'
  },
  {
    path: '/folder/Tutorial',
    component: () => import ('../../views/welcome/index.vue')
  }
]

export default routes