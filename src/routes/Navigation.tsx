import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';

import logo from '../logo.svg';

type ActiveStyle = {
  isActive: boolean;
};

const activeStyle = ({ isActive }: ActiveStyle) =>
  isActive ? 'nav-active' : '';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="Logo" />

          <ul>
            <li>
              <NavLink to="/home" className={activeStyle}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={activeStyle}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" className={activeStyle}>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="users" element={<h1>Users Page</h1>} />
          <Route path="about" element={<h1>About Page</h1>} />
          <Route path="home" element={<h1>Home Page</h1>} />
          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
