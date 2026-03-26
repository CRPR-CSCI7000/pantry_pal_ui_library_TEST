/**
 * Navbar component.
 *
 * Props:
 *   isLoggedIn  - boolean
 *   onLogout    - () => void
 *   links       - array of { label, to }  (optional, defaults to standard PantryPal links)
 *   brandName   - string (default: "PantryPal")
 *   brandTo     - string href (default: "/pantry")
 */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const DEFAULT_LINKS = [
  { label: "Pantry", to: "/pantry" },
  { label: "Recipes", to: "/recipes" },
  { label: "Calendar", to: "/calendar" },
];

const Navbar = ({
  isLoggedIn,
  onLogout,
  links = DEFAULT_LINKS,
  brandName = "PantryPal",
  brandTo = "/pantry",
}) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (isLoggedIn) {
      try {
        const userInfo = JSON.parse(localStorage.getItem("user"));
        if (userInfo?.name) setUserName(userInfo.name);
        else if (userInfo?.email) setUserName(userInfo.email.split("@")[0]);
        else if (userInfo?.username) setUserName(userInfo.username);
      } catch {
        // ignore
      }
    }
  }, [isLoggedIn]);

  const handleLogout = () => {
    setUserName("");
    if (onLogout) onLogout();
  };

  return (
    <nav className="pp-navbar">
      <div className="pp-navbar-logo">
        <Link to={brandTo}>{brandName}</Link>
      </div>
      <div className="pp-navbar-links">
        {isLoggedIn ? (
          <>
            {links.map(({ label, to }) => (
              <Link key={to} to={to}>
                {label}
              </Link>
            ))}
            {userName && (
              <span className="pp-user-greeting">Hello, {userName}</span>
            )}
            <button className="pp-logout-button" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              className="pp-login-button"
              onClick={() => navigate("/signin")}
            >
              Login
            </button>
            <button
              className="pp-signup-button"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
