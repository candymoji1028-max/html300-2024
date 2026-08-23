/*	Use of Vue router to navigate component pages */

import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue'
import Images from '../views/Images.vue'
import Grid from '../views/Grid.vue'
import Accordion from '../views/Accordion.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/images', component: Images },
    { path: '/grid', component: Grid },
    { path: '/accordion', component: Accordion }
  ]
})