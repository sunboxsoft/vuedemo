<template>
  <section class="ACascader">
    <a-cascader v-model="value" :options="options" change-on-select />
  </section>
</template>

<script>
export default {
  name: "ACascader",
  data() {
    return {
      value: [],
      options: [
        {
          value: "zhejiangv",
          label: "Zhejiangl",
          children:[]
        },
        {
          value: "guangdongv",
          label: "guangdongl",
          children:[]
        }
      ],
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
