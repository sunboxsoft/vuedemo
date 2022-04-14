<template>
  <a-form
    :form="form"
    :label-col="{ span: 6 }"
    :wrapper-col="{ span: 10 }"
    @submit="handleSubmit0"
  >
    <a-form-item label="姓名">
      <a-input
        placeholder="请输入姓名"
        v-decorator="[
          'realname',
          {
            rules: [
              { required: true, message: '请输入姓名', trigger: 'blur' },
              {
                min: 3,
                max: 5,
                message: 'Length should be 3 to 5',
                trigger: 'blur',
              },
              { validator: this.validatorPhone },
            ],
          },
        ]"
      />
    </a-form-item>
    <a-form-item label="年龄">
      <a-input
        placeholder="请输入年龄"
        v-decorator="[
          'age',
          {
            rules: [
              { required: true, message: '请输入年龄', trigger: 'blur' },
              {
                min: 3,
                max: 5,
                message: 'Length should be 3 to 5',
                trigger: 'blur',
              },
            ],
          },
        ]"
      />
    </a-form-item>
    <a-form-item label="Activity zone">
      <a-select
        v-decorator="[
          'region',
          {
            rules: [
              {
                required: true,
                message: 'Please select Activity zone',
                trigger: 'change',
              },
            ],
          },
        ]"
        placeholder="please select your zone"
      >
        <a-select-option value="shanghai">Zone one</a-select-option>
        <a-select-option value="beijing">Zone two</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="Activity time">
      <a-date-picker
        v-decorator="[
          'date1',
          {
            rules: [
              {
                required: true,
                message: 'Please pick a date',
                trigger: 'change',
                type: 'object',
              },
            ],
          },
        ]"
        show-time
        type="date"
        placeholder="Pick a date"
        style="width: 100%"
      />
    </a-form-item>

    <a-form-item label="Instant delivery">
      <a-switch
        v-decorator="[
          'delivery',
          {
            valuePropName: 'checked', //这是关键
            initialValue: true,
          },
        ]"
      />
    </a-form-item>

    <a-form-item label="Activity type">
      <a-checkbox-group
        v-decorator="[
          'type',
          {
            rules: [
              {
                type: 'array',
                required: true,
                message: 'Please select at least one activity type',
                trigger: 'change',
              },
            ],
          },
        ]"
      >
        <a-checkbox value="1" name="type">Online</a-checkbox>
        <a-checkbox value="2" name="type">Promotion</a-checkbox>
        <a-checkbox value="3" name="type">Offline</a-checkbox>
      </a-checkbox-group>
    </a-form-item>
    <a-form-item label="Resources">
      <a-radio-group
        v-decorator="[
          'resource',
          {
            rules: [
              {
                required: true,
                message: 'Please select activity resource',
                trigger: 'change',
              },
            ],
          },
        ]"
      >
        <a-radio value="1">Sponsor</a-radio>
        <a-radio value="2">Venue</a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item label="Activity form" name="desc">
      <a-textarea
        v-decorator="[
          'desc',
          {
            rules: [
              {
                required: true,
                message: 'Please input activity form',
                trigger: 'blur',
              },
            ],
          },
        ]"
      />
    </a-form-item>

    <a-form-item :wrapper-col="{ span: 10, offset: 6 }">
      <a-button type="primary" html-type="submit"> 提交 </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import moment from "moment";
export default {
  name: "ValidateFormCheck",
  data() {
    return {
      form: this.$form.createForm(this, { name: "coordinated" }),
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
      if (value.length != 4) {
        callback(new Error("必须为4位"));
        return; //校验不通过结束当前校验
      }
      callback(); //必须调用，参数为空视为校验通过
    },
    // 个人基本信息
    handleSubmit0(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        // console.log(err);
        if (!err) {
          // console.log(err, values);
          console.log(values, values.type, values.type.length);
          console.log(
            values.date1,
            moment(values.date1).format("YYYY-MM-DD HH:mm:ss")
          );
          alert("提交成功");
        }
      });
    },
  },
};
</script>

<style>
</style>
