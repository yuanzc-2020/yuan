<template>
  <div id="home">
    <div class="title">
        <h1>电子收据系统管理平台</h1>
      
    </div>
    <side></side>
    <app_header></app_header>
      <!-- //父向子传值 -->
    <users v-bind:person="person" ></users>
    <app_footer></app_footer>
      
  </div>
</template>

<script>

import Users from './Users'
import Header from './Header'
import Footer from './Footer'
import Side from './Side'
import $ from 'jquery';

     export default {
      name: 'Home',
      data(){
        return {
          //父向子传值
          "person":{
            "name":"jeck",
            "age":"19"
          },
          receipt:[]

        }

      },
      components:{
        "users":Users,
        "app_header":Header,
        "app_footer":Footer,
        "side":Side
      },
      
     
    }
</script>

<style>
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 0;
    }
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .title{
      text-align: center;
      height: 100px;
      line-height: 100px;
    }
</style>
