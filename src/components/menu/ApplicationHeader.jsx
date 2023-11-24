import React from "react";
import { Link, NavLink } from "react-router-dom";

const ApplicationHeader = () => {
  return (
    <header className="bg-body-secondary">
      <div className="py-2">
        <nav className="navbar navbar-expand-lg">
          <div>
            <NavLink className="navbar-brand" to="/main">
              Головна
            </NavLink>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/validation" className="nav-link">
                перевірка оголошень
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default ApplicationHeader;
