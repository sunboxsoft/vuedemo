<template>
  <section class="RadioGroup">
    <a-radio-group v-model="value1">
      <a-radio-button value="a">Hangzhou</a-radio-button>
      <a-radio-button value="b">Shanghai</a-radio-button>
      <a-radio-button value="c">Beijing</a-radio-button>
      <a-radio-button value="d">Chengdu</a-radio-button>
    </a-radio-group>
    {{value1}}
  </section>
</template>

<script>
export default {
  name: "RadioGroup",
  data() {
    return {
      value1: "a",
    };
  },
  components: {},
  watch: {},
  mounted() {},
  methods: {},
};
</script>

<style>
</style>
