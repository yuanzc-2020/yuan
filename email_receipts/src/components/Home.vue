<template>
  <div id="home">
    <div class="title">
        <h1>电子收据系统管理平台</h1>
      
    </div>
   
    <app_header></app_header>
      <!-- //父向子传值 -->
      <el-container>
         <side v-if="isRouterSide"></side>
        <users v-bind:person="person" v-if="isRouterUsers" ></users>
        <app_footer v-if="isRouterFooter"></app_footer>
      </el-container>
    
      
  </div>
</template>

<script>

import Users from './ '
import Header from './Header'
import Footer from './Footer'
import Side from './Side'
import $ from 'jquery';

     export default {
      name: 'Home',
      
     
      data(){
        return {
          isRouterSide=true,
          isRouterUsers=true,
          isRouterFooter=true,
          //父向子传值
          "person":{
            "name":"jeck",
            "age":"19"
          },
          receipt:[],
         
        }

      },
      provide(){
        return {
          reloadSide: this.reloadSide,
          reloadUsers: this.reloadUsers,
          reloadFooter: this.reloadFooter

        }
      },
      components:{
        "users":Users,
        "app_header":Header,
        "app_footer":Footer,
        "side":Side
      },
      methods:{
        reloadSide(){
            this.isRouterSide=false;
            this.$nextTick(() => {
              this.isRouterSide=true;
            })
          },
          reloadUsers(){
            this.isRouterUsers=false;
            this.$nextTick(() => {
              this.isRouterUsers=true;
            })
          },
          reloadFooter(){
            this.isRouterFooter=false;
            this.$nextTick(() => {
              this.isRouterFooter=false;
            })
          }
      }
      
     
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
