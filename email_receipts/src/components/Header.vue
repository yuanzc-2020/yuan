<template>
  <div class="header">
    <h1></h1>
    
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: 'Header',
  data () {
    return {
      msg: {
          "name":"yuan"
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header{
        overflow: hidden;
        width: 90%;
        background: gold;
        float: right;
        border-bottom: 1px black solid;
    }

</style>
