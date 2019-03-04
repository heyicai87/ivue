<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <transition enterActiveClass="animated lightSpeedIn">
    <!--<transition name="fade" mode="out-in">-->
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isNew: true,
    sex: '321',
    age: '123'
  },
  mutations: {
    SET_AGE (state, v) {
      state['age'] = v
    },
    SET_SEX (state, v) {
      state['sex'] = v
    }
  }
//  actions: {
//    SET_AGE ({commit}) {
//      commit('SET_AGE')
//    },
//    SET_SEX ({commit}) {
//      commit('SET_SR')
//    }
//  }
})
Vue.prototype.getId = function (a, b) {
  this.jquery(a).attr(b)
}
export default {
  name: 'app',
  store
}
</script>
<style>
  @import "css/main.css";
  @import "../static/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.css";
  @import "../static/zTree_v3-master/css/zTreeStyle/zTreeStyle.css";
  /*@import "../static/css/bootstrap.min.css";*/
</style>
