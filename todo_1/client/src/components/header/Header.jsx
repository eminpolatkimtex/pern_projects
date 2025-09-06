import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Todo App</div>
      <nav className="nav">
        <Link to="/">Dashboard</Link>
        <Link to="/todos">Todo Listesi</Link>
      </nav>
    </header>
  );
};

export default Header;
