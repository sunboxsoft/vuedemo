<template>
  <a-table
    :columns="columns"
    :data-source="data"
    rowKey="key"
    :row-selection="rowSelection"
  >
    <span slot="name" slot-scope="name, r" @click="handleOk(r.key)">
      {{ name }}
      <!-- {{ name }} AAAAA{{ r }} -->
      <!-- <hr /> -->
    </span>
    <span slot="time" slot-scope="time"> {{ time | formatTime(time) }} </span>
  </a-table>
</template>

<script>
import moment from "moment";
export default {
  name: "Table01",
  data() {
    return {
      selectedTableRow: [],
      columns: [
        {
          title: "name",
          dataIndex: "name",
          key: "name",
          scopedSlots: { customRender: "name" },
        },
        {
          title: "时间",
          dataIndex: "time",
          align: "center",
          scopedSlots: { customRender: "time" },
        },
        {
          title: "Age",
          dataIndex: "age",
          key: "age",
        },
        {
          title: "Address",
          dataIndex: "address",
          key: "address",
        },
        {
          title: "Tags",
          key: "tags",
          dataIndex: "tags",
        },
        {
          title: "Action",
          key: "action",
        },
      ],

      data: [
        {
          key: "11",
          name: "John Brown",
          age: 32,
          address: "New York No. 1 Lake Park",
          time: 1636838400000,
          tags: ["nice", "developer"],
        },
        {
          key: "22",
          name: "Jim Green",
          age: 42,
          address: "London No. 1 Lake Park",
          time: 1626838400001,
          tags: ["loser"],
        },
        {
          key: "33",
          name: "Joe Black",
          age: 32,
          address: "Sidney No. 1 Lake Park",
          time: 1626838400002,
          tags: ["cool", "teacher"],
        },
      ],
    };
  },
  components: {},
  watch: {},
  mounted() {},
  filters: {
    formatTime(time) {
      return moment(time).format("YYYY-MM-DD");
    },
  },
  methods: {
    handleOk(id) {
      alert(id);
    },
  },
  computed: {
    rowSelection() {
      return {
        onChange: (selectedRowKeys, selectedRows) => {
          this.selectedTableRow = selectedRowKeys;
          console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            "selectedRows: ",
            selectedRows
          );
        },
        selectedRowKeys: this.selectedTableRow,
      };
    },
  },
};
</script>

<style>
</style>
