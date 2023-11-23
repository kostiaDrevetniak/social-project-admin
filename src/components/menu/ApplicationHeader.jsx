import React from "react";
import { Link, NavLink } from "react-router-dom";


const ApplicationHeader = () => {
  return (
    <header>
      <nav>
        <div>
          <NavLink to="/main">Головна</NavLink>
        </div>
        <ul>
          <li>
            <Link to="/validation">перевірка оголошень</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default ApplicationHeader;
