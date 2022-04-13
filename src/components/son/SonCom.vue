<template>
  <section class="SonCom">
    SonCom {{ text }}
    <grandson-com></grandson-com>
  </section>
</template>

<script>
import GrandsonCom from "./grandson/GrandsonCom.vue";
export default {
  name: "SonCom",
  data() {
    return {};
  },
  inject: ["text"],
  components: { GrandsonCom },
  watch: {},
  mounted() {},
  methods: {},
};
</script>

<style>
</style>
