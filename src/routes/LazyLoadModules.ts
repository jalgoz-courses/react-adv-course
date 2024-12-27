import { lazy } from 'react';

export const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout" */ '../01-lazyload/components/layout/LazyLayout'
    ),
);
