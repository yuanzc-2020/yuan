<template>
  <div class="side">
    
      <router-link to="/users"><Button>电子收据管理</Button></router-link>

      <router-link to="/add"><Button>电子收据申请</Button></router-link>

      <router-link to="/invoice"><Button>电子收据审核</Button></router-link>

      <router-link to="/invoice"><Button>电子收据列表</Button></router-link>

  </div>
</template>

<script>

import $ from 'jquery';
export default {
  name: 'Side',
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
    .side{
        overflow: hidden;
        width: 10%;
        background: beige;
        float: left;
          border-bottom: 1px black solid;
    }

</style>
