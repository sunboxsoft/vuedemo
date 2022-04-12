<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <v-form-design ref="vFormDesign"></v-form-design>
    <a-button @click="handleModal()" type="primary">打开</a-button>
  </div>
</template>

<script>
import VFormDesign from "./VFormDesign.vue";
export default {
  components: { VFormDesign },
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  methods: {
    handleModal() {
      this.$refs.vFormDesign.open();
    },
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
