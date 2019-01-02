
const routes = [
  { path: '/', component: () => import('layouts/Login.vue') },
  { 
    path: '/layout',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/adm', component: () => import('pages/Adm.vue') },
      { path: '/design', component: () => import('pages/Designer.vue') },
      { path: '/estoque', component: () => import('pages/Estoque.vue') },
      { path: '/vendedores', component: () => import('pages/Vendedores.vue') },
      { path: '/vendedor', component: () => import('pages/Vendedor.vue') },
      { path: '/test', component: () => import('pages/Test.vue') }
    ]
  },
  

]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
