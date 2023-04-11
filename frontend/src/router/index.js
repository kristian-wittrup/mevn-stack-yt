import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodoDetail from '../views/TodoDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/todos',
    name: 'todos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TodosView.vue')
  },
  {
    path: '/todo/:id',
    name: 'todo single',
    component: TodoDetail
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  //  component: () => import(/* webpackChunkName: "about" */ '../views/TodoDetail.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
   
    // Part I - Add a meta field to the route
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue'),
  }
  // Login nav guard
 

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach(async (to, from, next) => {
  const isAuthenticated = localStorage.getItem('lsToken') // lsToken
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  
  //const isAuthenticated =  true
  if ( !isAuthenticated && requiresAuth) {
    next('/login')
  }
  else {
    next()
  }
})


export default router








/*


// // Part I -  Define a global navigation guard
// router.beforeEach(async (to) => {
//   const isAuthenticated =  false //localStorage.getItem('user')
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
//   if (
//     // make sure the user is authenticated
//     !isAuthenticated && requiresAuth &&
//     // ❗️ Avoid an infinite redirect
//     to.name !== 'login'
//   ) {
//     // redirect the user to the login page
//     return { name: 'login' }
//   }
// })



// Part II

// global navigation guard based on user authentication from localstorage
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  console.log("req Auth:", requiresAuth)
  const isAuthenticated = localStorage.getItem('user') // lsToken
  console.log("is Auth?:", isAuthenticated)
//  debugger
  if (requiresAuth &&  !isAuthenticated) { // if route requires auth and user is not authenticated
    next('/login') // redirect to login page
  } else {
    next() // proceed to route
  }
})
*/