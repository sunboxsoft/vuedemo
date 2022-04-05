<template>
  <section class="TestComponent">
    <ul>
      <li>
        姓名: <a-input placeholder="请输入用户名" v-model="userInfo.username" />
      </li>
      <li>年龄: <a-input placeholder="请输入密码" v-model="userInfo.age" /></li>
      <li>
        性别:
        <a-radio-group v-model="userInfo.sex">
          <a-radio value="男">男</a-radio>
          <a-radio value="女">女</a-radio>
        </a-radio-group>
      </li>
      <li>
        爱好:
        <a-checkbox-group v-model="userInfo.hoppy">
          <a-checkbox value="游泳"> 游泳 </a-checkbox>
          <a-checkbox value="滑雪"> 滑雪 </a-checkbox>
        </a-checkbox-group>
      </li>
      <li>
        城市:
        <a-select
          mode="default"
          v-model="userInfo.selectedCity"
          style="width: 200px"
          placeholder="Tags Mode"
          @change="handleChange"
        >
          <a-select-option v-for="item in cities" :key="item">
            {{ item }}
          </a-select-option>
        </a-select>
      </li>
      <li>
        生日:
        <a-date-picker
          show-time
          :value="userInfo.birthday"
          format="YYYY-MM-DD  HH/mm/ss"
          @change="onChange"
        />
        <a-date-picker
          show-time
          :value="userInfo.birthday"
          placeholder="Select Time"
          @change="onChange"
          @ok="onOk"
        />
      </li>
    </ul>
    {{ userInfo }}
    {{ userInfo.birthday }}AAAAA
  </section>
</template>

<script>
import moment from "moment";
const dateFormat = "YYYY-MM-DD  HH/mm/ss";
export default {
  name: "TestComponent",
  data() {
    return {
      userInfo: {
        username: "",
        age: null,
        sex: "女",
        birthday: moment(new Date("2022-04-05T00:00:00.000Z")),
        hoppy: [],
        selectedCity: "深圳",
      },
      cities: ["北京", "上海", "深圳"],
    };
  },
  components: {},
  watch: {},
  mounted() {},
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    },

    onChange(value, dateString) {
      console.log("Selected Time: ", value);
      console.log("Formatted Selected Time: ", dateString);
      this.userInfo.birthday = value;
    },
    onOk(value) {
      console.log("onOk: ", value);
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding: 5px;
  li {
    margin-bottom: 10px;
    input {
      width: 400px;
    }
  }
}
</style>
