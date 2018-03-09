import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/Start'
import Game from '@/components/Game'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    }
  ]
})
