import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false
import request from './common/ajax.js'
Vue.prototype.$h5 = request
App.mpType = 'app'
// Vue.prototype.user_token='fb7952b57f0174f2342a1aba49371600f3451f71998a86bfcb88ca566440ff9a17c1e4860a496b72fa0a3817333a5a29a02b555db08cd535adf1c70a1c44157d19e905dbbdd6d293f351b729b9d9606ed35d354898b8ad4b9a3115a80769bf05'

const app = new Vue({
    ...App
})
app.$mount()
