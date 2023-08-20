import { createRouter, createWebHistory } from 'vue-router'

//Views
import Landing from '../views/Landing.vue';
import ViewEvent from '../views/viewEvent.vue';
import FeedbackSection from '../views/FeedbackSection.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Landing
    },
    {
      path:'/Event/:id',
      name: 'viewEvent',
      component: ViewEvent
    },
    {
      path:'/feedback',
      name:'feedback',
      component: FeedbackSection
    },
    {
      path: "/intranet",
      name:'Intranet',
      component: null,
      beforeEnter(to, from, next) {
        window.location.href = "https://google.com/contact";
      }
    }
  ]
})

export default router
