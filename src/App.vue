<template>
  <div id="app">
    <Header />
    <Addtodo v-on:add-to="Addtodo"/>
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo"/>
  </div>
</template>

<script>
import Header from './components/layout/header.vue';
import Todos from './components/Todos';
import Addtodo from './components/addtodo';



export default {
  name: 'App',
  components: {
    Header,
    Todos,
    Addtodo
  },
  data(){
    return{
     todos:[{
       id: 1,
       title: "Todo One",
       completed: true

     },
     {
       id:2,
       title: "Todo Two",
       completed: true
     },
     {
       id: 3,
       title: "Todo Three",
       completed: false
     }
     ]
    }
  },
  methods:{
    deleteTodo(id){
      this.todos= this.todos.filter(todo=>todo.id!=id);
    },
    Addtodo(newTodo){
      this.todo=[...this.todos,newTodo];
    }
  }

}
</script>

<style>
  *{
    box-sizing: border-box;
    margin:0;
    padding:0;
  }
  body{
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }
  .btn{
    display: inline-block;
    border:none;
    background: #555;
    color:beige;
    padding: 7px,20px;
    cursor: pointer;
  }
</style>
