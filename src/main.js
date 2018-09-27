// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import './assets/styles/reset.css'
import './assets/styles/common.css'
import * as filter from '@/vue-global-filter-func'

import iView from 'iview';
import 'iview/dist/styles/iview.css';

import 'lib-flexible'

import FastClick from 'fastclick'
Vue.use(iView);

FastClick.attach(document.body)

Vue.config.productionTip = false

/**
 * Vue Global Filter
 * -----------------
 */

/**
 * Filter End
 * -----------------
 */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
