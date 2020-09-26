<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Hello world</h2>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    
  },
  created(){
      console.log("123")
      console.log($);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
