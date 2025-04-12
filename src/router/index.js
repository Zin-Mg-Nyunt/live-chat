import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '../views/WelcomePage.vue'
import ChatroomPage from '../views/ChatroomPage.vue'
import { auth } from '@/firebase/config'

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: WelcomePage,
    beforeEnter(to,from,next) { // route guard
      let user = auth.currentUser;
      if (!user) {
        next()
      } else {
        next({name: 'chatroom'})
      }
    }
  },
  {
    path: '/chatroom',
    name: 'chatroom',
    component: ChatroomPage,
    beforeEnter(to,from,next) { // route guard
      let user = auth.currentUser;
      if (user) {
        next()
      } else {
        next({name: 'welcome'})
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
