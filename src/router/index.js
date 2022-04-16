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
            path: '/ASelectT',
            name: 'ASelectT',
            component: () =>
                import ('../components/ASelectT.vue')
        },
        {
            path: '/ACascader',
            name: 'ACascader',
            component: () =>
                import ('../components/ACascader.vue')
        },
        {
            path: '/AMentionsT',
            name: 'AMentionsT',
            component: () =>
                import ('../components/AMentionsT.vue')
        }
    ]
})