import VueRouter from "vue-router";
import AppContent from './Router/AppContent';
import SpecialCount from './Router/SpecialCount/SpecialCount';
import TabBar from './Router/TabBar';

const routes = [
  { path: '/', component: AppContent },
  { path: '/tospecial', component: SpecialCount },
  {path: '/to/:section', component: TabBar}
]
const router = new VueRouter({
     routes
})
export default router;