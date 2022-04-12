<template>
  <div class="hello">
    <h2>Essential Links</h2>
    <a-button type="primary" block> Primary </a-button>

    <global-modal
      title="新增表单"
      width="680px"
      v-if="visible"
      :centered="true"
      @cancel="handleCancel"
      :visible="visible"
    >
      <template slot="modalBody">
        <a-spin :spinning="confirmLoading"> </a-spin>
        <a-button type="primary" @click="confirmLoading = !confirmLoading"
          >改变</a-button
        >
      </template>
    </global-modal>

    <a-modal
      :visible="visible1"
      title="弹框标题"
      cancelText="取消"
      okText="确定"
      @ok="handleOk"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
    <a-button @click="visible1 = true" type="primary">弹</a-button>

    <a-modal
      :visible="visible2"
      title="表单设计器"
      @ok="handleOk"
      width="100%"
      @cancel="handleCancel"
      wrapClassName="full-modal"
      :maskClosable="true"
      :closable="visible"
      :ok-button-props="{ visible: false }"
      :cancel-button-props="{ visible: false }"
    >
      <test-b :id="111"></test-b>
      <template #footer> </template>
    </a-modal>
    <a-button @click="visible2 = true" type="primary">弹 全屏</a-button>
  </div>
</template>

<script>
import GlobalModal from "./GlobalModal/GlobalModal.vue";
import TestB from "./TestB.vue";
export default {
  components: { GlobalModal, TestB },
  name: "HelloWorld",
  data() {
    return {
      visible: false,
      visible1: false,
      visible2: false,
      confirmLoading: true,
    };
  },
  methods: {
    open() {
      this.visible = true;
    },
    handleCancel() {
      //   this.$refs.ruleForm.resetFields()
      this.visible = false;
      this.visible2 = false;
    },
    handleOk(e) {
      console.log(e);
      visible2.value = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
/deep/.full-modal {
  .ant-modal {
    max-width: 100%;
    top: 0;
    padding-bottom: 0;
    margin: 0;
  }
  .ant-modal-content {
    display: flex;
    flex-direction: column;
    height: calc(100vh);
  }
  .ant-modal-body {
    flex: 1;
  }
}
</style>