<template>
<div>
    {{form}}
  <a-form-model :rules="rules" :model="form" ref="ruleForm"
   layout="horizontal">
    <a-form-model-item
      label="Enter your username"
      prop="username"
      ref="username"
    >
      <a-input
        placeholder="Username"
        v-model="form.username"
        class="form-input"
        size="large"
      >
        <a-icon slot="prefix" type="user" />
      </a-input>
    </a-form-model-item>

    <a-form-model-item
      label="Enter your password"
      prop="username"
      ref="username"
    >
      <a-input-password
        placeholder="input password"
        v-model="form.password"
        class="form-input"
        size="large"
      >
        <a-icon slot="prefix" type="key" />
      </a-input-password>
    </a-form-model-item>

    <a-form-item>
      <a-checkbox
        v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
        >Remember me</a-checkbox
      >
      <a class="login-form-forgot" href=""> Forgot password </a>
    </a-form-item>

    <a-button class="my-btn" size="large" @click="onSubmit()"> Login </a-button>
  </a-form-model>
  </div>
</template>

<script>
export default {
  name: "ValidateLogin",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "Please input Username" },
          { min: 3, max: 5, message: "Length should be 3 to 10" },
        ],
        password: [
          { required: true, message: "please input your password" },
          { min: 5, message: "minimum password length is 5" },
        ],
      },
    };
  },
  components: {},
  watch: {},
  mounted() {},
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style>
</style>
