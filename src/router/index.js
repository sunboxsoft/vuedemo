import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {

            path: '/layoutt',
            name: 'LayoutT',
            component: () =>
                import ('../components/LayoutT.vue')
        },
        {
            path: '/spacet',
            name: 'SpaceT',
            component: () =>
                import ('../components/SpaceT.vue')
        },
        {
            path: '/validateform',
            name: 'ValidateForm',
            component: () =>
                import ('../components/ValidateForm.vue')
        },
        {
            path: '/radiogroup',
            name: 'RadioGroup',
            component: () =>
                import ('../components/RadioGroup.vue')
        },
        {
            path: '/ValidateFormCheck',
            name: 'validateformcheck',
            component: () =>
                import ('../components/ValidateFormCheck.vue')
        },
        {

            path: '/validatelogin',
            name: 'ValidateLogin',
            component: () =>
                import ('../components/ValidateLogin.vue')
        },
        {

            path: '/ValidateFormDefine',
            name: 'ValidateFormDefine',
            component: () =>
                import ('../components/ValidateFormDefine.vue')
        }
    ]
})