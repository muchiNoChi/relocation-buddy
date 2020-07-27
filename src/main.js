import Vue from 'vue';
import Buefy from 'buefy';
import i18n from 'vue-i18n';
import router from './router';
import App from './App.vue';

// Styles
// Importing Stylesheet from Buefy
import 'buefy/dist/buefy.css';

// Extend Vue with libraries
Vue.use(Buefy, {
  defaultIconPack: 'fas',
  defaultContainerElement: '#content',
});

Vue.use(i18n);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
