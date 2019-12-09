import Vue from 'vue';
import {
  connect,
} from 'redux-vuex';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import * as Actions from './store/actions';

Vue.config.productionTip = false;

connect({
  Vue,
  store,
  ...Actions,
  // binding, // optional: public store binding on vue instance (by default 'store')
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
