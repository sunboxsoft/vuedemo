<template>
  <a-form-model
    ref="ruleForm"
    :model="form"
    :rules="rules"
    :label-col="{ span: 4 }"
    :wrapperCol="{ span: 4 }"
  >
    <a-form-model-item label="姓名：" prop="add_name">
      <a-input v-model="form.add_name" placeholder="请输入姓名" />
    </a-form-model-item>
    <a-form-model-item label="电话：" prop="add_phone">
      <a-input v-model="form.add_phone" placeholder="请输入电话号码" />
    </a-form-model-item>

    <a-button type="primary" @click="onSubmit">Primary Button</a-button>
  </a-form-model>
</template>

<script>
export default {
  name: "ValidateFormDefine",
  data() {
    return {
      // 表单绑定数据
      form: {
        add_name: "",
        add_phone: "",
      },
      // 表单校验规则
      rules: {
        add_phone: [
          { required: true, message: "电话号码不能为空" },
          { validator: this.validatorPhone },
        ],
      },
    };
  },
  components: {},
  watch: {},
  mounted() {},
  methods: {
    validatorPhone(rule, value, callback) {
      console.log(value, "QQQQQQQQQQQQQQQ");
      // 如果为空值，就抛出错误
      if (!value) {
        callback(new Error("年份选择不能为空"));
        return; //校验不通过结束当前校验
      }
      if (value.length != 11) {
        callback(new Error("手机号码11位"));
        return; //校验不通过结束当前校验
      }
      callback(); //必须调用，参数为空视为校验通过
    },
    validatorYear(rule, value, callback) {
      // 如果为空值，就抛出错误
      if (!value) {
        callback(new Error("年份选择不能为空"));
        return; //校验不通过结束当前校验
      }
      callback(); //必须调用，参数为空视为校验通过
    },
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        alert(valid);

        // 校验未全部通过，结束当前提交
        if (!valid) return false;
        console.log(this.form.add_phone);
        // 校验全部通过，提交，此处提交代码仅作演示
        // const { data: res } = await this.axios.post("你的提交地址", {
        //   提交参数,
        // });
      });
    },
  },
};
</script>

<style>
</style>
