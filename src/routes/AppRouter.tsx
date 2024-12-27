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
            path: '/lazyload/lazy1',
            element: <LazyPage1 />,
          },
          {
            path: '/lazyload/lazy2',
            element: <LazyPage2 />,
          },
          {
            path: '/lazyload/lazy3',
            element: <LazyPage3 />,
          },
          {
            index: true,
            element: <Navigate to="/lazyload/lazy1" replace />,
          },
          {
            path: '/lazyload/*',
            element: <Navigate to="/lazyload/lazy1" replace />,
          },
        ],
      },
      {
        path: '/no-lazy',
        element: <NoLazy />,
      },
      {
        index: true,
        element: <Navigate to="/no-lazy" replace />,
      },
      {
        path: '/*',
        element: <Navigate to="/no-lazy" replace />,
      },
    ],
  },
];

export const AppRouter = createBrowserRouter(routes);
