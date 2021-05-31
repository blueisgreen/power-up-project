const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: 'draft',
        component: () => import('pages/LessonDraftingTable.vue'),
      },
      {
        path: 'admin',
        component: () => import('pages/AdminMembers.vue'),
      },
      {
        path: 'profile',
        component: () => import('pages/MemberProfile.vue'),
      },
      {
        path: 'composer',
        component: () => import('pages/CourseComposer.vue'),
      },
      {
        path: 'articles',
        component: () => import('src/pages/ArticlesPage.vue'),
      },
      {
        path: 'sims',
        component: () => import('pages/ComingSoon.vue'),
      },
      {
        path: 'explore',
        component: () => import('pages/ComingSoon.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
]

export default routes
