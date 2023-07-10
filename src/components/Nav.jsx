import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assests/App.css";
const Nav = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar">
        <h1 onClick={() => navigate("/")}>Axioned</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>
            <Link to="/user">user</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Nav