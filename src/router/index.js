import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import First from '@/components/FirstComponent'
import Second from '@/components/SecondComponent'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/First',
      name: 'First',
      component: First
    },
    {
      path: '/Second',
      name: 'Second',
      component: Second
    }
  ]
})
