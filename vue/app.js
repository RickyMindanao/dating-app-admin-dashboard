import Vue from 'vue'
import VueResource from 'vue-resource'
import VueValidator from 'vue-validator'

Vue.use(VueResource);
Vue.use(VueValidator);

Vue.http.options.root = '/api';
Vue.http.headers.common['X-CSRF-TOKEN'] = $('meta[name="csrf-token"]').attr('content')

import App from './App.vue'


new Vue(App).$mount('body');