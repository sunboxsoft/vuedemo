<template>
  <!-- Form排版布局 -->
  <a-form :layout="formState.layout" :model="formState" v-bind="formItemLayout">
    <a-form-item label="Form Layout">
      <a-radio-group v-model="formState.layout">
        <a-radio-button value="horizontal">Horizontal</a-radio-button>
        <a-radio-button value="vertical">Vertical</a-radio-button>
        <a-radio-button value="inline">Inline</a-radio-button>
      </a-radio-group>
    </a-form-item>
    <a-form-item label="Field A">
      <a-input :value="formState.fieldA" placeholder="input placeholder" />
    </a-form-item>
    <a-form-item label="Field B">
      <a-input :value="formState.fieldB" placeholder="input placeholder" />
    </a-form-item>
    <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
      <a-button type="primary">Submit</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  name: "ValidateForm",
  data() {
    return {
      formState: {
        layout: "vertical",
        fieldA: "",
        fieldB: "",
      },
    };
  },
  computed: {
    formItemLayout() {
      const { layout } = this.formState;
      return layout === "horizontal"
        ? {
            labelCol: {
              span: 3,
            },
            wrapperCol: {
              span: 15,
            },
          }
        : {};
    },
    buttonItemLayout() {
      const { layout } = this.formState;
      return layout === "horizontal"
        ? {
            wrapperCol: {
              span: 15,
              offset: 3,
            },
          }
        : {};
    },
  },
  components: {},
  watch: {},
  mounted() {},
  methods: {},
};
</script>

<style>
</style>
