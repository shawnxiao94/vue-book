import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home/index.vue'
import my from '../views/my/index.vue'
import login from '../views/login/index.vue'
import shelf from '../views/shelf/index.vue'
// import ShelfCategory from '../views/shelf/ShelfCategory.vue'
import detail from '../views/detail/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/ebook',
    name: 'ebook',
    component: () => import(/* webpackChunkName: "ebook" */ '../views/ebook/index.vue'),
    meta: {
      footShow: false,
      isLogin: false
    },
    children: [
      {
        path: ":fileName",
        name: 'Reader',
        component: () => import(/* webpackChunkName: "EbookReader" */ '../components/ebook/EbookReader.vue'),
        meta: {
          footShow: false,
          isLogin: false
        },
      }
    ]
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    meta: {
      footShow: true,
      isLogin: false
    },
  },
  {
    path:"/classify",
    name:"classify",
    component:()=>import(/* webpackChunkName: "classify" */ '../views/classify/index.vue'),
    meta: {
      footShow: true,
      isLogin: false
    },
  },
  {
    path: '/list',
    name: 'bookList',
    component: () => import(/* webpackChunkName: "bookList" */ '../views/home/bookList.vue'),
    meta: {
      footShow: false,
      isLogin: false
    },
  },
  {
    path: '/shelf',
    name: 'shelf',
    // component: () => import(/* webpackChunkName: "shelf" */ '../views/shelf/index.vue'),
    component: shelf,
    meta: {
      footShow: true,
      isLogin: true
    },
  },
  {
    path: '/shelf/category',
    name: 'ShelfCategory',
    component: () => import(/* webpackChunkName: "ShelfCategory" */ '../views/shelf/ShelfCategory.vue'),
    meta: {
      footShow: false,
      isLogin: true
    },
  },
  {
    path: '/detail',
    name: 'detail',
    // component: () => import(/* webpackChunkName: "detail" */ '../views/detail/index.vue'),
    component: detail,
    meta: {
      footShow: false,
      isLogin: false
    },
  },
  // {
  //   path: '/speaking',
  //   name: 'speaking',
  //   component: () => import(/* webpackChunkName: "speaking" */ '../views/speaking/index.vue'),
  //   meta: {
  //     footShow: false,
  //     isLogin: false
  //   },
  // },
  {
    path: '/my',
    name: 'my',
    component: my,
    meta: {
      footShow: true,
      isLogin: true
    },
  },
  {
    path: '/my/history',
    name: 'ReaderHistory',
    component: () => import(/* webpackChunkName: "ReaderHistory" */ '../views/my/readerHistory.vue'),
    meta: {
      footShow: false,
      isLogin: true
    },
  },
  {
    path: '/my/edit',
    name: 'UserEdit',
    component: () => import(/* webpackChunkName: "UserEdit" */ '../views/my/userEdit.vue'),
    meta: {
      footShow: false,
      isLogin: true
    },
  },
  {
    path: '/my/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "About" */ '../views/my/about.vue'),
    meta: {
      footShow: false,
      isLogin: true
    },
  },
  {
    path: '/login',
    name: 'login',
    // component: () => import(/* webpackChunkName: "login" */ '../views/login/index.vue'),
    component: login,
    meta: {
      footShow: false,
      isLogin: false
    },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/login/userRegister.vue'),
    meta: {
      footShow: false,
      isLogin: false
    },
  },
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router
