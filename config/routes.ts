import { Route } from '@ant-design/pro-layout/lib/typings';

const routes: Route[] = [
  {
    path: '/',
    name: '首页',
    icon: 'ProjectOutlined',
    routes: [
      {
        path: '/',
        name: '统计',
        component: '@/pages/home',
      }
    ]
  },
];

export default routes;
