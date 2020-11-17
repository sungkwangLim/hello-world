<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>{{ title }}</h1>
    <!-- <Home @changeTitle="updateTitleText($event)" /> -->
    <!-- <Child />
    <Login />
    <Stock v-show="false" /> -->
    <router-view ></router-view>    
    <div><button v-on:click="goBack">전페이지</button></div>
    <div>
      <router-link to="/Home">Go to Home</router-link> <br>
      <router-link to="/Stock">Go to stock</router-link> <br>
      <router-link to="/Login">Go to Login</router-link>
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import Home from './components/Home.vue'
// import  Child  from "./components/child";
// import  Stock  from "./components/stock";
// import  Login  from "./components/Login";

export default {
  name: 'App',
  components: {
    //HelloWorld,
    // Child,
    // Stock,
    // Login
  },
  data(){
    return{
      title: 'hello'
    }
  },
  methods : {
    updateTitleText(item){
      this.title = item;
    },
    goBack(){
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  },
  beforeCreate : function(){
    console.log('before create',this.title);
  },
  created : function(){
    console.log('created',this.title);
  },
  beforeMount : function(){
    console.log('before mount',this.title);
  },
  mounted : function(){
    console.log('mounted',this.title);
  }
}
</script>

<style>
* {margin: 0; padding: 0; box-sizing: border-box;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
