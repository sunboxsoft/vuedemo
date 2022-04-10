<template>
  <div class="hello">
    <h2>Essential Links</h2>
    <a-table :dataSource="dataSource" :columns="columns" />
    <a-rate :default-value="5">
      <a-icon type="star" slot="character"></a-icon>
    </a-rate>
  <div class="icons-list">
    <icon-font type="icon-tuichu" />
    <icon-font type="icon-facebook" />
    <icon-font type="icon-twitter" />
  </div>AA
  <FilterOutlined></FilterOutlined>BBB
  </div>
</template>

<script>
import { FilterOutlined } from '@ant-design/icons-vue';
import { createFromIconfontCN } from '@ant-design/icons-vue';
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
export default {
  name: "HelloWorld",
  components: {
    IconFont,
      	FilterOutlined,
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      dataSource: [
        {
          key: "1",
          name: "Mike",
          age: 32,
          address: "10 Downing Street",
        },
        {
          key: "2",
          name: "John",
          age: 42,
          address: "10 Downing Street",
        },
      ],

      columns: [
        {
          title: "编号",
          dataIndex: "key",
          key: "key",
        },
        {
          title: "Name标题",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "Age标题",
          dataIndex: "age",
          key: "age",
        },
        {
          title: "Address标题",
          dataIndex: "address",
          key: "address",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.hello {
  h1 {
    color: pink;
  }
}
</style>
