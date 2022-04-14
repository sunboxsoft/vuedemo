<template>
  <div>
    <a-table
      :row-key="(record) => record.key"
      :dataSource="dataSource"
      :columns="columns"
      :pagination="pagination"
    >
      <template #name="text, record, index">
        <a>{{ text }}QAAAAAA{{ record }}AAAAAA{{ index }}</a>
      </template>
    </a-table>
  </div>
</template>

<script>
export default {
  name: "TableTest",
  props: {},
  data() {
    return {
      dataSource: [
        {
          key: "1",
          name: "胡彦斌",
          age: 32,
          address: "西湖区湖底公园1号",
        },
        {
          key: "2",
          name: "胡彦祖",
          age: 42,
          address: "西湖区湖底公园1号",
        },
      ],
      columns: [
        {
          title: "姓名",
          dataIndex: "name",
          key: "name",
          scopedSlots: {
            customRender: "name",
          },
        },
        {
          title: "年龄",
          dataIndex: "age",
          key: "age",
        },
        {
          title: "住址",
          dataIndex: "address",
          key: "address",
        },
      ],
      pagination: {
        disabled: false, //禁用分页
        hideOnSinglePage: true, //只有一页时是否隐藏分页器
        pageSize: 2, //每页条数，所有页设置统一的条数
        pageSizeOptions: ["2", "4", "8"], //每页显示的条数，每页设置不同的条数
        total: 3, //数据总数
      },
    };
  },
  computed: {},
  watch: {},
  methods: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
