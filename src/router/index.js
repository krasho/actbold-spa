import Vue from 'vue'
import Router from 'vue-router'
import Home from './../components/Home/Home'
import Team from './../components/Team/Team'
import Cases from './../components/Cases/Cases'


Vue.use(Router)

let dynamicRoutes = [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/who-we-are',
      name: 'team',
      component: Team
    },
    {
      path: '/case-studies',
      name: 'cases',
      component: Cases
    }
    
]

export default new Router({
  mode: 'history',
  routes: dynamicRoutes
})
