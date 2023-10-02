import React from "react";
import { Link } from "react-router-dom";

function Links() {
  const tabLinkStyle = {
    textDecoration: "none",
    padding: "1rem 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "5px",
    margin: "0 10px",
  };
  return (
    <div>
      <Link to="/exercise" style={tabLinkStyle}>
        Exercises
      </Link>
      <Link to="/food" style={tabLinkStyle}>
        Food
      </Link>
      <Link to="/goal" style={tabLinkStyle}>
        Goal
      </Link>
      <Link to="/" style={tabLinkStyle}>
        Dashboard
      </Link>
    </div>
  );
}

export default Links;
