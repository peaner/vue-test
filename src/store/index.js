import Vue from 'vue'
import Vuex from 'vuex'
import classRoom from '@/store/modules/classRoom'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    classRoom
  }
})
