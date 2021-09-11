import Screens from '../screens/Screens'
import Vue from "vue";
import Router from 'vue-router'

import {
  nameScreen
} from "../../data/index";

Vue.use(Router);

const routes = [ {
    path: `/${nameScreen.red}`,
    name: nameScreen.red,
    component: Screens
  },
  {
    path: `/${nameScreen.yellow}`,
    name: nameScreen.yellow,
    component: Screens
  },
  {
    path: `/${nameScreen.green}`,
    name: nameScreen.green,
    component: Screens
  },
]

const router = new Router({
  mode: 'history',
  routes
})

export default router;