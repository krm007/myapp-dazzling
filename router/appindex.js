import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Index'// 主页
import My from '@/components/My'//个人中心


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
