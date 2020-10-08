import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Add from '@/components/Add'
import Invoice from '@/components/Invoice'
import Users from '@/components/Users'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {path:"/hello",name:"hello",component:HelloWorld},
    {path:"/add",name:"add",component:Add},
    {path:"/invoice",name:"invoice",component:Invoice},
    {path:"/users",name:"users",component:Users},
    

  ],
  mode:"history"
})
