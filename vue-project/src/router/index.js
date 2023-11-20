import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import DataBindingList2 from '../views/DataBindingList2.vue'
import NestedComponent from '../views/NestedComponent.vue'
import ParentComponent from '../views/ParentComponent.vue'
import CalculatorComponent from '../views/CalculatorComponent.vue'
import CompositionAPI from '../views/CompositionAPI.vue'
import CompositionAPI2 from '../views/CompositionAPI2.vue'
import CompositionAPI3 from '../views/CompositionAPI3.vue'
import CompositionAPI4 from '../views/CompositionAPI4.vue'
import CompositionAPIProvide from '../views/CompositionAPIProvide.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }, 
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/databindinglist2',
    name: 'DataBindingList2',
    component: DataBindingList2
  },
  {
    path: '/nestedcomponent',
    name: 'NestedComponent',
    component: NestedComponent
  },
  {
    path: '/parentcomponent',
    name: 'ParentComponent',
    component: ParentComponent
  },
  {
    path: '/calculatorComponent',
    name: 'CalculatorComponent',
    component: CalculatorComponent
  },
  {
    path: '/compositionAPI',
    name: 'CompositionAPI',
    component: CompositionAPI
  },
  {
    path: '/compositionAPI2',
    name: 'CompositionAPI2',
    component: CompositionAPI2
  },
  {
    path: '/compositionAPI3',
    name: 'CompositionAPI3',
    component: CompositionAPI3
  },
  {
    path: '/compositionAPI4',
    name: 'CompositionAPI4',
    component: CompositionAPI4
  },
  {
    path: '/compositionAPIProvide',
    name: 'CompositionAPIProvide',
    component: CompositionAPIProvide
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
