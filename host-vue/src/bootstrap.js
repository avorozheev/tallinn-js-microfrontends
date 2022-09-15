import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import Main from './pages/main/Main'
import LiveData from './pages/live-data/LiveData'
import Connector from './pages/dashboard/Connector'
import DashboardRoutes from './pages/dashboard/DashboardRoutes'
import App from './App.vue'

const routes = [
  { path: '/', name: 'Main', component: Main },
  { path: '/live-data', name: 'LiveData', component: LiveData },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardRoutes,
    children: [
      {
        path: '',
        component: Connector
      },
      {
        path: ':pathMatch(.*)*',
        component: Connector
      }
    ]
  },
]

const mount = (el, { history }) => {
  const router = createRouter({
    history: history,
    routes,
  })
  const app = createApp(App);
  app.use(router)
  app.mount(el);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("_dashboard-dev-root");
  if (devRoot) {
    mount(devRoot, { history: createWebHistory() });
  }
}
export { mount };