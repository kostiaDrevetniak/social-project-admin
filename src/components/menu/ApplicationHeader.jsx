import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const ApplicationHeader = () => {
  const navigate = useNavigate();

  const logout = () => {
    window.sessionStorage.setItem("token", "");
    navigate(0);
  };

  return (
    <header className="bg-body-secondary">
      <div className="py-2">
        <nav className="navbar navbar-expand-lg">
          <div>
            <NavLink className="navbar-brand" to="/home">
              Головна
            </NavLink>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/validation" className="nav-link">
                Перевірка
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/announcements" className="nav-link">
                Оголошення
              </Link>
            </li>
            <li>
              <Link to="/companies" className="nav-link">
                Організації
              </Link>
            </li>
            <li>
              <Link to="/categories" className="nav-link">
                Категорії
              </Link>
            </li>
          </ul>
          <div>
            <button onClick={logout}>Вийти</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default ApplicationHeader;
