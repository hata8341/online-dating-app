import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import UserList from '../views/pages/UserList.vue'
import UserDetail from '../views/pages/UserDetail.vue'
import Chat from '../views/pages/Chat.vue'
import MessageList from '../views/pages/MessageList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/user/:id',
    name: 'UserDetail',
    component: UserDetail,
  },
  {
    path: '/user/:id/chat',
    name: 'Chat',
    component: Chat,
  },
  {
    path: '/message-list',
    name: 'MessageList',
    component: MessageList,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
