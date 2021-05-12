<template>
  <div id="app">
    <h1>{{ msg }}</h1>   
    <span v-if="seen"> Now you see me</span>
    <ol>
      <li v-for="todo in todos">
        {{todo.text}}
      </li>
    </ol>
    <button v-on:click="addTodos"> 增加 </button>
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage"> Reverse Message </button>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    reverseMessage: function(){
      this.message = this.message.split('').reverse().join('')
    },
    addTodos: function(){
      this.todos.push({text: '新增'+this.todos.length})
    },
  },
  data() {
    return {
      seen: true,
      msg: "测试",
      todos: [
      {text: '哈哈哈'},
      {text: '嘿嘿嘿'}, 
      {text: '嘻嘻嘻'}],
      message: 'Hello Vue.js!',
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  font-weight: normal;
  color: #42b983;
}
.dataitem {
  width: 120px;
  height: 120px;
  float: left;
  margin: 6px;
}
.product {
  text-align: center;
}
.product img {
  height: 80px;
  padding: 10px;
}
</style>
