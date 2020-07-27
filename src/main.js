import Vue from 'vue';
import Buefy from 'buefy';
import i18n from 'vue-i18n';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import router from './router';
import App from './App.vue';

// Styles
// Importing Stylesheet from Buefy
import 'buefy/dist/buefy.css';

Vue.use(i18n);

// Icons
library.add(faAngleLeft, faAngleRight);
Vue.component('font-awesome-icon', FontAwesomeIcon);

// Extend Vue with libraries
Vue.use(Buefy, {
  defaultIconPack: 'fas',
  defaultContainerElement: '#content',
  defaultIconComponent: 'font-awesome-icon',
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
