<template>
  <div>
    <div class="header">
    <slot name="Header"></slot></div>
    <hr />
    <div class="content">
    <slot name="Content"></slot></div>
    <hr />
    <div class="footer">
    <slot></slot></div>
  </div>
</template>

<script>
export default {
  name: "ChildSlot",
  data() {
    return {};
  },
  components: {},
  watch: {},
  mounted() {},
  methods: {},
};
</script>

<style>
a-layout-header {
  background-color: pink;
}
a-layout-content {
  background-color: yellow;
}
a-layout-footer {
  background-color: purple;
}
</style>
