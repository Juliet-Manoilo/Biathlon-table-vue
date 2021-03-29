import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import { Table, TableColumn } from 'buefy/dist/components/table'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false
Vue.use(Buefy)
Vue.component('b-table', Table)
Vue.component('b-table-column', TableColumn )

new Vue({
  render: h => h(App),
}).$mount('#app')

