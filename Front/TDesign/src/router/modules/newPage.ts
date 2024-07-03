import { lazy } from 'react';
import { DashboardIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const newpage: IRouter[] = [
  {
    path: '/newpage',
    meta: {
      title: '新增页面',
      Icon: DashboardIcon,
    },
    children: [
      {
        path: 'base',
        Component: lazy(() => import('pages/NewPage')),
        meta: {
          title: '新增页面',
        },
      }
    ],
  },
];

export default newpage;
