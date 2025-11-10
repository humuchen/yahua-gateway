import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const itemRoutes: RouteRecordRaw[] = [
  {
    path: '/about',
    component: () => import('@/views/About/index.vue')
  },
  {
    path: '/honor',
    component: () => import('@/views/Honor/index.vue')
  },
  {
    path: '/product',
    component: () => import('@/views/Product/index.vue')
  },
  {
    path: '/service',
    component: () => import('@/views/Service/index.vue')
  },
  {
    path: '/join',
    component: () => import('@/views/Join/index.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/MainLayout/MainLayout.vue'),
      children: [
        {
          path: '/',
          component: () => import('@/views/home.vue')
        },
        ...itemRoutes
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ],
  scrollBehavior() {
    return { top: 0 };
  }
});

router.beforeEach((to) => {
  if (to.meta?.title) {
    document.title = [to.meta.title, '江苏亚华集团官网'].join(' | ');
  } else {
    document.title = '江苏亚华集团丨未来探索者';
  }
});

export default router;
