import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index.vue'
import Content from '@/page/content.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/content/:id',
      name: 'Content',
      component: Content
    }
  ]
})
