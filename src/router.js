import VueRouter from "vue-router";
import AppContent from './Router/AppContent';
import SpecialCount from './Router/SpecialCount/SpecialCount';

const routes = [
  { path: '/', component: AppContent },
  { path: '/tospecial', component: SpecialCount }
]
const router = new VueRouter({
     routes
})
export default router;