<template>
  <section class="ASelectT">

    <a-select
      v-model="value"
      :showSearch="true"
      style="width: 100%"
      :token-separators="[',']"
      placeholder="请选择表单"
      :options="options"
      @change="handleChange"
    >
    </a-select>
    {{ value }}

       <a-select v-model="value"   :showSearch="true" style="width: 100%" placeholder="Tags Mode" :options="options"> </a-select>
  </section>
</template>

<script>
export default {
  name: "ASelectT",
  data() {
    return {
      value: '',
      options: [
        {
          value: "$a12",
          label: "a1",
        },
        {
          value: "$a23",
          label: "a2",
        },
      ],
    };
  },
  components: {},
  computed: {
    valueComponents: function()  {
      return this.value.map((item) => {
       return item + "$";
      });
    },
  },
  watch: {},
  mounted() {},
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    },
  },
};
</script>

<style>
</style>
