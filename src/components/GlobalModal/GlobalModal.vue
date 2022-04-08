
<template>
  <a-modal
    v-if="footer"
    :class="[modalClass, simpleClass]"
    :visible="showModal"
    :title="title"
    :destroyOnClose="destroyOnClose"
    :centered="centered"
    :closable="closable"
    :maskClosable="maskClosable"
    @ok="handleOk"
    @cancel="handleCancel"
    :width="width == '100%' ? '70%' : width"
    :cancelText="cancelText"
    :okText="okText"
  >
    <slot name="modalBody" style="minheight: 600px"></slot>
    <template slot="footer">
      <slot name="footer"></slot>
    </template>
  </a-modal>
  <a-modal
    v-else
    :class="[modalClass, simpleClass]"
    :visible="showModal"
    :title="title"
    :centered="centered"
    :closable="closable"
    :destroyOnClose="destroyOnClose"
    @ok="handleOk"
    @cancel="handleCancel"
    :width="width == '100%' ? '70%' : width"
    :footer="null"
    :cancelText="cancelText"
    :okText="okText"
  >
    <slot name="modalBody"></slot>
    <slot name="footer"></slot>
  </a-modal>
</template>

<script type='text/ecmascript-6'>
import { Modal } from 'ant-design-vue-ex'

export default {
  name:"GlobalModal",
  components: {},
  data() {
    return {
      mouseDownX: 0,
      mouseDownY: 0,
      deltaX: 0,
      deltaY: 0,
      sumX: 0,
      sumY: 0,
      isMove: false,

      header: null,
      contain: null,
      modalContent: null,
      showModal: this.visible,
      modalPointer: null
    }
  },
  props: {
    // 容器的类名
    modalClass: {
      type: String,
      default: () => {
        return 'modal-box'
      },
    },
    visible: {
      type: Boolean,
      default: () => {
        return false
      },
    },
    title: {
      type: String,
      default: () => {
        return ''
      },
    },
    width: {
      type: String,
      default: () => {
        return '70%'
      },
    },
    footer: {
      type: Boolean,
      default: () => {
        return true
      },
    },
    isView: {
      type: Boolean,
      default: () => {
        return true
      },
    },
    centered: {
      type: Boolean,
      default: () => {
        return true
      },
    },
    destroyOnClose: {
      type: Boolean,
      default: () => {
        return false
      },
    },
    maskClosable: {
      type: Boolean,
      default: () => {
        return false
      },
    },
    closable: {
      type: Boolean,
      default: () => {
        return true
      },
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    okText: {
      type: String,
      default: '确定',
    },
  },
  computed: {
    simpleClass() {
      return Math.random().toString(36).substring(2)
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.initialEvent(this.visible)
    })
  },
  created() {},
  beforeDestroy() {
    this.removeMove()
    window.removeEventListener('mouseup', this.removeUp, false)
  },
  methods: {
    handleOk() {
      this.$emit('ok')
    },
    handleCancel() {
      this.$emit('cancel')
    },
    resetNum() {
      this.mouseDownX = 0
      this.mouseDownY = 0
      this.deltaX = 0
      this.deltaY = 0
      this.sumX = 0
      this.sumY = 0
    },
    handleMove(event) {
      this.isMove = true
      const delta1X = event.pageX - this.mouseDownX
      const delta1Y = event.pageY - this.mouseDownY

      this.deltaX = delta1X
      this.deltaY = delta1Y
      this.modalContent.style.transform = `translate(${this.deltaX + this.sumX}px, ${this.deltaY + this.sumY}px)`
    },
    initialEvent(visible) {
      const _this = this
      if (visible) {
        _this.sumY = 0
        _this.sumX = 0
        setTimeout(() => {
          window.removeEventListener('mouseup', _this.removeUp, false)
          _this.contain = document.getElementsByClassName(_this.simpleClass)[0]
          _this.header = _this.contain.getElementsByClassName('ant-modal-header')[0]
          _this.modalContent = this.contain.getElementsByClassName('ant-modal-content')[0]

          _this.modalContent.style.left = 0
          _this.modalContent.style.transform = 'translate(0px,0px)'

          _this.header.style.cursor = 'all-s `croll'

          _this.header.onmousedown = (e) => {
            _this.isMove = false
            _this.mouseDownX = e.pageX
            _this.mouseDownY = e.pageY
            document.body.onselectstart = () => false
            window.addEventListener('mousemove', _this.handleMove, false)
          }

          window.addEventListener('mouseup', _this.removeUp, false)
        }, 0)
      }
    },
    removeMove() {
      this.isMove = false
      window.removeEventListener('mousemove', this.handleMove, false)
    },
    removeUp(e) {
      document.body.onselectstart = () => true
      if (!(e.pageX == this.mouseDownX && e.pageY == this.mouseDownY) && this.isMove) {
        this.sumX += this.deltaX
        this.sumY += this.deltaY
      }

      this.removeMove()
    },
  },
}
</script>

<style lang='less' scoped>
</style>
