<template>
  <div class="invoice">
    
    <h2>Hello world invoice</h2>
    
  </div>
</template>

<script>
export default {
  name: 'Invoice',
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
