const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/Index.vue') },
      {
        path: 'profile',
        name: 'memberProfile',
        component: () => import('pages/MemberProfile.vue'),
      },
      {
        path: 'admin/members',
        name: 'adminDashboard',
        component: () => import('pages/AdminMembers.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
]

export default routes
