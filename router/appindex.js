import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Index'// 主页
import perfect from '@/components/perfect'
import My from '@/components/My'//个人中心
import login from '@/components/login'//登录
import mypost from '@/components/mypost'//登录
import sort from '@/components/sort'
import detil from '@/components/detil'






Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/perfect',
      component: perfect
    },{
      path: '/',
      component: Home
    },
     {
      path: '/my',
      component: My
    },
   {
      path: '/login',
      component: login
    }, {
      path: '/sort',
      component: sort
    },{
      path: '/detil/:pid',
      component: detil
    },
        {
      path: '/mypublish',
      component: mypost
    } ]
})


