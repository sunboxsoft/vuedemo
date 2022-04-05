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

            path: '/layouttest01',
            name: 'LayoutTest01',
            component: () =>
                import ('../components/LayoutTest01.vue')
        },
        {
            path: '/spacet',
            name: 'SpaceT',
            component: () =>
                import ('../components/SpaceT.vue')
        },
        {
            path: '/testcomponent',
            name: "TestComponent",
            component: () =>
                import ('../components/TestComponent.vue')
        }
    ]
})