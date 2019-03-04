import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Hello = r => require.ensure([], () => r(require('../components/Hello.vue')), 'hello')
const GridDemo = r => require.ensure([], () => r(require('../components/GridDemo.vue')), 'GridDemo')
const Layout = r => require.ensure([], () => r(require('../components/Layout.vue')), 'Layout')
const Public = r => require.ensure([], () => r(require('../components/Public.vue')), 'Public')
const Page = r => require.ensure([], () => r(require('../components/Page.vue')), 'Table')
const a = r => require.ensure([], () => r(require('../components/1.vue')), 'a')
const b = r => require.ensure([], () => r(require('../components/2.vue')), 'b')
const c = r => require.ensure([], () => r(require('../components/3.vue')), 'c')

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'Hello',
      component: Hello
    },
    {
      path: '/grid/:id',
      // name: 'Grid',
      component: GridDemo
    },
    {
      path: '/layout/:name',
      // name: 'Layout',
      component: Layout
    },
    {
      path: '/public/:age',
      // name: 'public',
      component: Public
    },
    {
      path: '/page',
      // name: 'page',
      component: Page,
      children: [
        {
          path: '/1',
          // name: '1',
          component: a
        },
        {
          path: '/2',
          // name: '2',
          component: b
        },
        {
          path: '/3',
          // name: '3',
          component: c
        }
      ]
    }
  ]
})
