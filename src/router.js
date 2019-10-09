import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import SignUp from '@/components/Admin/SignUp'
import LogIn from '@/components/Admin/LogIn'
import Users from '@/components/Admin/Users'
import UserDetails from '@/components/Admin/UserDetails'
import AddPost from '@/components/Admin/AddPost'
import Posts from '@/components/Admin/Posts'
import Home from '@/components/Home'
import SinglePost from '@/components/SinglePost'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'LogIn',
      component: LogIn
    },
    {
      path: '/admin/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/admin/users/:id',
      name: 'UserDetails',
      component: UserDetails,
      props: true
    },
    {
      path: '/:slug',
      name: 'SinglePost',
      component: SinglePost,
      props: true
    },
    {
      path: '/admin/posts/new',
      name: 'AddPost',
      component: AddPost
    },
    {
      path: '/admin/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
