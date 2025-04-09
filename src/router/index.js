import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '../views/WelcomePage.vue'
import ChatroomPage from '../views/ChatroomPage.vue'

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: WelcomePage
  },
  {
    path: '/chatroom',
    name: 'chatroom',
    component: ChatroomPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
