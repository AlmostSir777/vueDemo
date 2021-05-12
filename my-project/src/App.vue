<template>
  <div id="app1">
    <h1>{{ msg }}</h1>
    <span v-if="seen"> Now you see me</span>
    <ol>
      <li v-for="todo in todos">
        {{ todo.text }}
      </li>
    </ol>
    <button v-on:click="addTodos">增加</button>
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">Reverse Message</button>
    <br />
    <span v-bind:title="message"> 悬浮显示信息 </span>
    <h2>输入</h2>
    <input v-model="message" />
    <h3>自定义组件</h3>
    <ol>
      <todo-item
        id="itemKey"
        v-for="item in list"
        v-bind:todo="item"
        v-bind:key="item.id"
      ></todo-item>
    </ol>
  </div>
</template>

<script>
export default {
  name: "app1",
  methods: {
    reverseMessage() {
      this.message = this.message.split("").reverse().join("");
    },
    addTodos() {
      this.todos.push({ text: "新增" + this.todos.length });
      this.changeSeenState();
    },
    changeSeenState() {
      this.seen = !this.seen;
    },
  },
  watch:{
       todos: function(value){
         window.alert(this.todos.length);
       },
  },
  data() {
    return {
      seen: false,
      msg: "测试",
      todos: [{ text: "哈哈哈" }, { text: "嘿嘿嘿" }, { text: "嘻嘻嘻" }],
      message: "Hello Vue.js!",
      list: [
        { id: 0, text: "蔬菜" },
        { id: 1, text: "奶酪" },
        { id: 2, text: "随便" },
      ],
    };
  },
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

h2 {
  color: red;
}

#itemKey{
  color: #42b983;
  font: 20;
}

</style>