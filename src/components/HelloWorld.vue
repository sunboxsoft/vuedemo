<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <son-com></son-com>
  </div>
</template>

<script>
import SonCom from "./son/SonCom.vue";

export default {
  components: { SonCom },
  name: "HelloWorld",
  provide: {
    text: "provide 注入的内容，我是贾国强",
  },
  provide() {
    return {
      text: this.arr,
    };
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      arr:[],
    };
  },
  created() {
    //把异步放到最外面
    setTimeout(() => {
      this.arr = ["大象", "老虎", "狮子"];
    }, 1000);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.hello {
  h1 {
    color: pink;
  }
}
</style>
