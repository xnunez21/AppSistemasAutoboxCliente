import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/Tutorial'
  },
  {
    path: '/Tutorial',
    component: () => import ('../../views/tutorial/index.vue')
  }
]

export default routes