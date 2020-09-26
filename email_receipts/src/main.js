// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'
import VueResource from 'vue-resource'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);

// import './assets/ajs/bootstrap.min.js'
// import './assets/acss/bootstrap.css'

// import Users from './components/Users.vue'
//设置路由

Vue.config.productionTip = false
//全局注册组件
Vue.component("hello",HelloWorld);
 //使用http请求
Vue.use(VueResource)


/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
