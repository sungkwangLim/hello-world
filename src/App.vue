<template>
  <div id="app">
    
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>{{ title }}</h1>
    <!-- <Home @changeTitle="updateTitleText($event)" /> -->
    <!-- <Child :wb="webtoons" /> -->
    <!-- <Login />
    <Stock v-show="false" /> -->
    <router-view :wb="webtoons"></router-view>    
    <div><button v-on:click="goBack">전페이지</button></div>
    <div>
      <router-link to="/">Go to main</router-link> <br>
      <router-link to="/Home">Go to Home</router-link> <br>
      <router-link to="/Child">Go to Child</router-link> <br>
      <router-link to="/Stock">Go to stock</router-link> <br>
      <router-link to="/Login">Go to Login</router-link>
    </div>
  </div>
</template>
<script>
//import HelloWorld from './components/HelloWorld.vue'
//import Home from './components/Home.vue'
//import  Child  from "./components/child";
//import  Stock  from "./components/stock";
//import  Login  from "./components/Login";

export default {
  name: 'App',
  components: {
    //HelloWorld,
    //Child,
    //Stock,
    //Login
  },
  data(){
    return{
      title: 'hello',
      webtoons: [
        {
          name: "햄스터와 그녀",
          link: "http://webtoon.daum.net/webtoon/view/hamsterandher",
          img:
            "http://t1.daumcdn.net/webtoon/op/478cdf37f585607982ffa9e35b432e8503be8a54"
        },
        {
          name: "프롬 스타",
          link: "http://webtoon.daum.net/webtoon/view/fromstar",
          img:
            "http://t1.daumcdn.net/webtoon/op/a7fb953d722c1130bfc18440f7e3ce448ece57a1"
        },
        {
          name: "위대한 로맨스",
          link: "http://webtoon.daum.net/webtoon/view/greatromance",
          img:
            "http://t1.daumcdn.net/webtoon/op/a816281cb4df5c50a20ac386fd6e496643d0f085"
        },
        {
          name: "빛나는 손을",
          link: "http://webtoon.daum.net/webtoon/view/Hand",
          img: "http://t1.daumcdn.net/cartoon/5913FCAC0234C50001"
        }
      ]
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
    //console.log('before create',this.title);
  },
  created : function(){
    //console.log('created',this.title);
  },
  beforeMount : function(){
    //console.log('before mount',this.title);
  },
  mounted : function(){
    //console.log('mounted',this.title);
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
