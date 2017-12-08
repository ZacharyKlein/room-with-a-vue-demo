import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import BookView from '@/components/BookView'
import AuthorView from '@/components/AuthorView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/books',
      name: 'Books',
      component: BookView
    },
    {
      path: '/authors',
      name: 'Authors',
      component: AuthorView
    }
  ]
})
