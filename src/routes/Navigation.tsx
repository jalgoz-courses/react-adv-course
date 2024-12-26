import { Suspense } from 'react';
import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';

import { routes } from './routes';

import logo from '../logo.svg';

type ActiveStyle = {
  isActive: boolean;
};

const activeStyle = ({ isActive }: ActiveStyle) =>
  isActive ? 'nav-active' : '';

export const Navigation = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="Logo" />

            <ul>
              {routes.map(({ to, name }) => (
                <li key={to}>
                  <NavLink to={to} className={activeStyle}>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
