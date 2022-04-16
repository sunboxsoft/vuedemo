<template>
  <a-mentions autofocus v-model="value"     :prefix="['@']" @select="onSelect">
    <a-mentions-option value="afc163">afc163</a-mentions-option>
    <a-mentions-option value="zombieJ">zombieJ</a-mentions-option>
    <a-mentions-option value="yesmeck">yesmeck</a-mentions-option>
  </a-mentions>
</template>

<script>
export default {
  name: "AMentionsT",
  data() {
    return {
      value: "",
    };
  },
  components: {},
  watch: {},
  mounted() {},
  methods: {
    onSelect(value) {
      console.log("select", option);
    },
  },
};
</script>

<style>
</style>
