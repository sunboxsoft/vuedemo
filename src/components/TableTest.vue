<template>
  <div id="components-table-demo-size">
    <h4>Middle size table</h4>
    <a-table
      :columns="columns"
      :data-source="data"
      :pagination="ipagination"
      size="middle"
    />
    <a-button>当前页</a-button>
    <h4>Small size table</h4>
    <a-table
      :columns="columns"
      @change="onChange"
      :pagination="ipagination"
      :data-source="data"
      size="small"
    />
    {{ ipagination }}
  </div>
</template>

<script>
export default {
  name: "TableTest",
  data() {
    return {
      columns: [
        { title: "Name", dataIndex: "name" },
        { title: "Age", dataIndex: "age" },
        { title: "Address", dataIndex: "address" },
      ],
      data: [
        {
          key: "1",
          name: "John Brown",
          age: 32,
          address: "New York No. 1 Lake Park",
        },
        {
          key: "2",
          name: "Jim Green",
          age: 42,
          address: "London No. 1 Lake Park",
        },
        {
          key: "3",
          name: "Joe Black",
          age: 32,
          address: "Sidney No. 1 Lake Park",
        },
      ],
      ipagination: {
        pageSize: 2,
        current: 1,
        hideOnSinglePage: true,
        total: 3,
        pageSizeOptions: ["1", "2", "3", "40"],
        showSizeChanger: true,
      },
    };
  },
  components: {},
  watch: {},
  mounted() {},
  methods: {
    onChange(pagination_, filters, sorter, { currentDataSource }) {
      this.ipagination.current =pagination_.current;
      console.log(
        pagination,
        filters,
        sorter,
        currentDataSource,
        "RRRRRRRRRRRRRRRR"
      );
    },
  },
};
</script>

<style>
</style>
