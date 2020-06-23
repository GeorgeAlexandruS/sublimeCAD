import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/authentication/Login.vue'
import Register from './views/authentication/Register.vue'
import BlogsAll from './views/blogs/BlogsAll.vue'
import BlogsCreate from './views/blogs/BlogsCreate.vue'
import BlogsEdit from './views/blogs/BlogsEdit.vue'
import * as auth from './services/AuthService'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/blogs',
      name: 'blogs-all',
      component: BlogsAll
    },
    {
      path: '/blogs/new',
      name: 'blogs-create',
      component: BlogsCreate,
      beforeEnter: (to, from, next) => {
        if (auth.isLoggedIn()) {
          next();
        } else {
          next('/login');
        }
      }
    },
    {
      path: '/blogs/:id',
      name: 'blogs-edit',
      component: BlogsEdit,
      beforeEnter: (to, from, next) => {
        if (auth.isLoggedIn()) {
          next();
        } else {
          next('/login');
        }
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      beforeEnter: (to, from, next) => {
        if (!auth.isLoggedIn()) {
          next();
        } else {
          next('/');
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (!auth.isLoggedIn()) {
          next();
        } else {
          next('/');
        }
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  linkActiveClass: 'active',
  mode: 'history'
})
