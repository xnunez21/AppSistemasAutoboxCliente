import { createRouter, createWebHistory } from '@ionic/vue-router';
import welcome from './welcome';
import tutorial from './tutorial';
import login from './login';
import forgot from './forgot';
import register from './register';

const importRouter = [welcome,login,forgot,register,tutorial];
const routes: any[] = [];

function allRoutersX (data: any[]) {
    for (const j in data) {
        const rt = data[j];
        for (const i in rt) {
            routes.push(rt[i]);
        }
    }
}
allRoutersX(importRouter);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
