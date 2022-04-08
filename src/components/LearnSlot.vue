<template>
  <div>
    <child-slot>
      <template slot="Header">
        <i>HHHHHHHHHHHHHHHH</i>
      </template>
      <template slot="Content">
         <a-checkbox v-model="checkbox" style="float: left"> 添加后自动打开设计 </a-checkbox>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        pp
      </template>
      <h1>BBBBBBBBBBBBB</h1>
    </child-slot>
    {{checkbox}}
  </div>
</template>

<script>
import ChildSlot from "@/components/child/ChildSlot";
export default {
  name: "LearnSlot",
  components: { ChildSlot },
  data() {
    return {
      checkbox:true
    };
  },
  watch: {},
  mounted() {},
  methods: {},
};
</script>

<style>
</style>
