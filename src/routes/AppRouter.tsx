import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';

import { LazyLayout } from './LazyLoadModules';
import { Navigation } from './Navigation';

import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigation />,
    children: [
      {
        path: '/lazyload',
        element: <LazyLayout />,
        children: [
          {
            path: '/lazy1',
            element: <LazyPage1 />,
          },
          {
            path: '/lazy2',
            element: <LazyPage2 />,
          },
          {
            path: '/lazy3',
            element: <LazyPage3 />,
          },
          {
            path: '*',
            element: <Navigate to="lazy1" replace />,
          },
        ],
      },
      {
        path: '/no-lazy',
        element: <NoLazy />,
      },
      {
        path: '/*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
];

export const AppRouter = createBrowserRouter(routes);
