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
            path: '/menubar',
            name: 'MenuBar',
            component: () =>
                import ('../components/MenuBar.vue')
        },
        {
            path: '/LearnSot',
            name: 'LearnSot',
            component: () =>
                import ('../components/LearnSlot.vue')
        },
        {
            path: '/SelectTest',
            name: 'SelectTest',
            component: () =>
                import ('../components/SelectTest.vue')
        },
        {
            path: '/TableTest',
            name: 'TableTest',
            component: () =>
                import ('../components/TableTest.vue')
        },
        {
            path: '/Table01',
            name: 'Table01',
            component: () =>
                import ('../components/Table01.vue'),
            meta: {
                key: 'path',
                title: 'VForm设计器',
                showMenu: true
            },
            children: [{
                path: '/Table01/child',
                name: '/Table01/child',
                component: () =>
                    import ('../components/Child.vue'),
                meta: {
                    key: 'path',
                    title: '子标题',
                    showMenu: true
                },
            }]
        }
    ]
})