import { createRouter, createWebHistory } from 'vue-router'
import File from '../views/FileComponent.vue';
import Main from "../views/MainComponent.vue";
import RegPost from "../views/RegPostComponent.vue";
import DetailPost from "../views/DetailPostComponent.vue"
const routes =  [
  {
    name: 'Home',
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
  },
  {
    path: '/regPost',
    component: RegPost
  },
  {
    name: 'DetailPost',
    path: '/detailPost/:seq',
    component: DetailPost,
  }
]
export const router = createRouter({
  history:  createWebHistory(),
  routes,
  strict: true, // applies to all routes
})
