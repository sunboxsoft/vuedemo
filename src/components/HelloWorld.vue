<template>
  <div class="hello">
    <h2>Essential Links</h2>
    <a-table
      ref="table"
      :dataSource="dataSource"
      :columns="columns"
      :bordered="true"
      :loading="loading"
      :pagination="pagination"
      @change="handleTableChange"
      rowKey="key"
      :locale="{
        filterConfirm: '确定',
        filterReset: '重置',
        emptyText: '暂无数据',
      }"
    >
      <!-- rowKey="key"  这行意思和下面一行表达的意思一样-->
      <!-- :rowKey="(tableDatas) => tableDatas.key" -->
      <!-- rowKey 	表格行 key 的取值，可以是字符串或一个函数 	string|Function(record):string 	'key' -->

      <!-- :loading="loading"
        :pagination="pagination"  //分页属性
        @change="handleTableChange"//点击分页中数字时触发的方法
        :rowKey="tableDatas => tableDatas.id"    //每一行的标识 -->
      <span slot="trqzTitle">
        <SmileOutlined></SmileOutlined>
        Name
      </span>

      <span slot="actionTitle"> 操作标题 </span>

      <template slot="noticeTitle" slot-scope="text, record, index">
        <a @click="onDetail(record)"
          >{{ text }}----{{ index }}-----------{{ record }}</a
        >
      </template>

      <span slot="action" slot-scope="text, record">
        <!-- // 放表格中操作的按钮 -->
        <div class="tabBtn">
          <a-popover placement="bottomRight" overlayClassName="tableBtn">
            <a href="javascript:;">
              <i class="iconfont icon-table-edit" />编辑{{ text }}
            </a>
            <a href="javascript:;">
              <i class="iconfont icon-tableEmpty" />删除{{ record }}
            </a>
            <span>
              <i class="iconfont icon-tableMore" />
            </span>
          </a-popover>
        </div>
      </span>

      <h1 slot="title">表格标题</h1>
      <h1 slot="footer">表格底部</h1>
    </a-table>
    {{ pagination }}
    <hr />
    {{ queryParam }}
    <SmileOutlined />

    <a-rate :default-value="5">
      <a-icon type="star" slot="character"></a-icon> </a-rate
    >s
    <div class="icons-list">
      <icon-font type="icon-tuichu" />
      <icon-font type="icon-facebook" />
      <icon-font type="icon-twitter" />
    </div>
    AA <FilterOutlined></FilterOutlined>BBB
  </div>
</template>

<script>
import { FilterOutlined, SmileOutlined } from "@ant-design/icons-vue";
import { createFromIconfontCN } from "@ant-design/icons-vue";
const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});
export default {
  name: "HelloWorld",
  components: {
    IconFont,
    FilterOutlined,
    SmileOutlined,
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
          address: "10 up Street",
        },
        {
          key: "3",
          name: "Telang",
          age: 42,
          address: "10 Left Street",
        },
        {
          key: "4",
          name: "HanMeimei",
          age: 42,
          address: "10 Right Street",
        },
      ],

      columns: [
        {
          slots: { title: "trqzTitle" },
          // title: "编号",
          dataIndex: "key",
          key: "key",
        },
        {
          title: "Name标题",
          dataIndex: "name", //如果没有 这一行 上面text 和 后面record 相同 ，为整个对象
          scopedSlots: { customRender: "noticeTitle" },
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
        {
          // title: "操作", 这行 和 下行 都是写 列头，优先级高
          slots: { title: "actionTitle" },
          scopedSlots: { customRender: "action" },
        },
      ],

      pagination: {
        total: 4,
        pageSize: 3, //每页中显示10条数据
        showSizeChanger: true,
        pageSizeOptions: ["3", "10", "20", "50", "100"], //每页中显示的数据
        showTotal: (total) => `共有 ${total} 条数据`, //分页中显示总的数据
      },

      loading: true,
      // 查询参数
      queryParam: {
        page: 1, //第几页
        size: 3, //每页中显示数据的条数
        hosName: "",
        hosCode: "",
        province: "",
        city: "",
      },
    };
  },
  methods: {
    handleTableChange(pagination) {
      this.pagination.current = pagination.current;
      this.pagination.pageSize = pagination.pageSize;
      this.queryParam.page = pagination.current;
      this.queryParam.size = pagination.pageSize;
      console.log(this.queryParam);
      // this.getTableList();
      this.getTableList();
    },
    //调用查询接口为dataSource 赋值
    getTableList() {
      console.log("AAAAAAAAAAAAAAAA");
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
      // retriveHosData(this.queryParam).then((res) => {
      //   if (res.message === "SUCCESS") {
      //     const pagination = { ...this.pagination };
      //     pagination.total = res.data.total;
      //     this.tableDatas = res.data.list;
      //     this.pagination = pagination;
      //   }
      //   this.loading = false;
      // });
    },
  },
  created() {
    setTimeout(() => {
      this.loading = false;

      const pagination = { ...this.pagination };
      // pagination.total = res.data.total;
      // this.tableDatas = res.data.list;
      this.dataSource = [
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
          address: "10 up Street",
        },
        {
          key: "3",
          name: "Telang",
          age: 42,
          address: "10 Left Street",
        },
        {
          key: "4",
          name: "HanMeimei",
          age: 42,
          address: "10 Right Street",
        },
      ];
      this.pagination = pagination;
      this.$refs.table.refresh();
    }, 2000);
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
