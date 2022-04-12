<template>
  <section class="TestB">TestB</section>
</template>

<script>
export default {
  name: "TestB",
  props: ["id"],
  data() {
    return {};
  },
  components: {},
  watch: {},
  created() {
    console.log(this.id, "AAAAAAAAAAAAAAAAAA");
  },
  mounted() {},
  methods: {},
};
</script>

<style>
</style>
