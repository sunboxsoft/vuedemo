<template>
  <global-modal
    :visible="visible"
    title="表单设计"
    v-if="visible"
    width="100%"
    :footer="false"
    :closable="false"
    modalClass="full-modal"
  >
  <template slot="modalBody">
       <a-button @click="closeModal" type="primary">关闭弹框</a-button>
  </template>
  </global-modal>
</template>

<script>
export default {
  name: "VFormDesign",
  data() {
    return {
      visible: false,
    };
  },
  watch: {},
  mounted() {},
  methods: {
    open() {
      this.visible = true;
    },
    closeModal(e){
        console.log(e)
        this.visible=false
    }
  },
};
</script>

<style lang="less">
.full-modal {
  .ant-modal {
    max-width: 100%;
    width: 100% !important;
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