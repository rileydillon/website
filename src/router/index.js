import Vue from 'vue'
import Router from 'vue-router'
import ComingSoon from '@/components/ComingSoon'
import WebDevelopment from '@/components/WebDevelopment'
import Calendar from '@/components/Calendar'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Coming Soon',
      component: ComingSoon
    },
    {
      path: '/web-development',
      name: 'Web Development',
      component: WebDevelopment
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    }
  ]
})
