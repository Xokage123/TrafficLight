import Screens from '../screens/Screens'
import Vue from "vue";
import Router from 'vue-router'

import {
  nameScreen
} from "../../data/index";

Vue.use(Router);

const routes = []

for (let color in nameScreen) {
  routes.push({
    path: `/${color}`,
    name: color,
    component: Screens
  });
}

const router = new Router({
  routes
})

export default router;