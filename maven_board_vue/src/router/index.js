import { createRouter, createWebHistory } from 'vue-router'
import File from '../views/FileComponent.vue';
import Main from "../views/MainComponent.vue";
const routes =  [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Main
  },
  {
    path: '/file',
    component: File
  }
]
export const router = createRouter({
  history:  createWebHistory(),
  routes,
  strict: true, // applies to all routes
})
