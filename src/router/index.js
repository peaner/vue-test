import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import InteractModeSingle from '@/views/room/InteractModeSingle'
import InteractModeStudents from '@/views/room/InteractModeStudents'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/mode/teacher',
      name: 'InteractModeSingle',
      component: InteractModeSingle
    },
    {
      path: '/mode/students',
      name: 'InteractModeStudents',
      component: InteractModeStudents
    }
  ]
})
