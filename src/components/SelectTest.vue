<template>
  <section class="SelectTest">
    <a-select
      :value="value"
      show-search
      placeholder="Select a person"
      style="width: 200px"
      :options="options"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
    ></a-select>
    {{ value }}
  </section>
</template>

<script>
export default {
  name: "SelectTest",
  data() {
    return {
      value: undefined,
      options: [
        {
          value: "jackv",
          label: "Jack",
        },
        {
          value: "lucyv",
          label: "Lucy",
        },
        {
          value: "tomv1",
          label: "Tom1",
        },
        {
          value: "tomv2",
          label: "Tom2",
        },
        {
          value: "tomv3",
          label: "Tom3",
        },
        {
          value: "tomv4",
          label: "Tom4",
        },
        {
          value: "tomv5",
          label: "Tom5",
        },
      ],
    };
  },
  components: {},
  watch: {},
  mounted() {},
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
      this.value = value;
    },
    handleBlur() {
      console.log("blur");
    },
    handleFocus() {
      console.log("focus");
    },
    filterOption(input, option) {
      return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    },
  },
};
</script>

<style>
</style>
