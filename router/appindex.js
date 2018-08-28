import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HelloFromVux'
import HelloWorld from '@/components/HelloWorld'
import My from '@/components/My'


Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        component: Home
    },
    {
      path: '/my',
      component: My
  }
  ]
})
