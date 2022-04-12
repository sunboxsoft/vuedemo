import globalModal from './GlobalModal.vue'

const GlobalModal = {
  install: function(Vue) {
    Vue.component('GlobalModal', globalModal)
  }
}

export default GlobalModal
