<template>
  <div class="footer">
     
    <h1>{{ msg.foo }}</h1>

  </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: 'Footer',
  data () {
    return {
      msg: {
          "foo":"foo"
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
     .footer{
        overflow: hidden;
        width: 90%;
        background: gold;
        float: right;
          border-bottom: 1px black solid;
    }
</style>
