<template>
  <div>
    <div ref="hello">
      hello world
    </div>
    <p ref="hello">choangqu</p>
    <button @click="handleClick">我是按钮</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      arr: ''
    }
  },
  methods: {
    handleClick () {
      this.arr = this.$refs.hello.innerHTML //获取DOM元素节点的值
      alert(this.arr)
    }
    
  },
 created(){
     alert("23232");
     this.arr = this.$refs.hello.innerHTML //获取DOM元素节点的值
      alert(this.arr)
    }
}
</script>
