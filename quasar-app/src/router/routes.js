
const childRoutes = [
  { path: '', name: 'home', component: () => import('pages/Index.vue') },
  { path: 'profile', name: 'profile', component: () => import('pages/MemberProfile.vue') },
  { path: 'admin/members', name: 'adminHome', component: () => import('pages/AdminMembers.vue') },
]
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('layouts/MainLayout.vue'),
    children: childRoutes,
  },
  {
    path: '/alt',
    component: () => import('layouts/AltMainLayout.vue'),
    children: childRoutes,
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
]

export default routes
