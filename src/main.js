import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import Vodal from 'vodal';
import 'vodal/common.css';
import "vodal/rotate.css";
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
Vue.component(Vodal.name, Vodal);

const options = {
  // You can set your default options here
};

Vue.use(Toast, options);

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
