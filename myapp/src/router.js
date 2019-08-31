import Vue from 'vue'
import Router from 'vue-router'
import Footer from '@/components/Footer'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { // 路由的重定向
      path: '/',
      redirect: '/home'
    },
    { // 注册
      path: '/register',
      name: 'register',
      components: {
        default: () => import('@/views/register/index.vue')
      }
    },
    /*{ // 登录
      path: '/login',
      name: 'login',
      components: {
        default: () => import('@/views/login/index.vue')
      }
    },*/
    { // 首页
      path: '/home',
      // alias: '/h',
      name: 'home',
      components: {
        default: () => import('@/views/home/index.vue'), // 路由懒加载
        footer: Footer
      }
    },
    { // 添加
      path: '/add',
      name: 'add',
      components: {
        default: () => import('@/views/add/index.vue'), // 路由懒加载
        footer: Footer
      }
    },
    { // 消息
      path: '/info',
      name: 'info',
      components: {
        default: () => import('@/views/info/index.vue'), // 路由懒加载
        footer: Footer
      }
    },
    { // 商城
      path: '/store',
      name: 'store',
      components: {
        default: () => import('@/views/info/index.vue'), // 路由懒加载
        footer: Footer
      }
    },
    { // 用户
      path: '/user',
      name: 'user',
      components: {
        default: () => import('@/views/user/index.vue'), // 路由懒加载
        footer: Footer
      },
      children: [
        // {
        //   path: '',
        //   redirect: 'nologin'
        // },
        {
          path: 'nologin', // 前面不要加/ ，你要的是 /user/nologin 加了就变成 /nologin
          name: 'nologin',
          component: () => import('@/components/user/Nologin.vue')
        },
        {
          path: 'loging',
          name: 'loging',
          component: () => import('@/components/user/Loging.vue')
        }
      ]
    },
    {
      path: '*',
      component: () => import('@/views/notfound/index.vue')
    }
  ]
})
