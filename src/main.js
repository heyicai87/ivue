import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import VueQRCodeComponent from 'vue-qrcode-component'
import axios from 'axios'
// import $ from 'jquery'

Vue.config.productionTip = false
Vue.use(iView)
Vue.component('qr-code', VueQRCodeComponent)
// window.$ = $
// Object.defineProperty(Vue.prototype, 'jquery', {value: jquery})
// Vue.prototype.jquery = $
/* eslint-disable no-new */
Vue.prototype.getId = function (a, b) {
  return window.$(a).attr(b)
}
Vue.prototype.getMessage = function (a, b) {
}
// jquery的ajax请求
Vue.prototype.$ajax = function (items) {
  var object = {
    type: 'GET',
    async: true,
    data: {},
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded'
  }
  items = window.$.extend(object, items)
  if (items.type.toUpperCase() === 'POST') {
    items.data = JSON.stringify(items.data)
    items.contentType = 'application/json'
  }
  window.$.ajax({
    type: items.type,
    url: items.url,
    contentType: items.contentType,
    data: items.data,
    dataType: items.dataType,
    async: items.async,
    success: function (data) {
      // 返回的信息具体情况具体分析
      items.success(data)
    },
    error: function (xhr, textStatus, error) {
      items.error(error)
    }
  })
}
// axios的ajax请求
Vue.prototype.$vueAjax = function (items) {
  var object = {
    type: 'GET',
    async: true,
    data: {},
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded'
  }
  items = window.$.extend(object, items)
  if (items.type.toUpperCase() === 'POST') {
    items.data = JSON.stringify(items.data)
    items.contentType = 'application/json'
    // axios.post()
  }
  axios({
    method: items.type,
    url: items.url,
    data: items.data,
    dataType: items.dataType,
    contentType: items.contentType,
    success: function (data) {
      items.success(data)
    },
    error: function (xhr, status, error) {
      items.error(error)
    }
  })
}

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
