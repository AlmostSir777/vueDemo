import Vue from 'vue'
import App from './App.vue'

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>'
})

var vm = new Vue({
  el: '#app',
  render: h => h(App)
})


