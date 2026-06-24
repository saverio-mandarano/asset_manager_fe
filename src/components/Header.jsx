import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [activeHome, setActiveHome] = useState(true);
  const [activeAssets, setActiveAssets] = useState(false);

  return (
    <header className="mb-5 mt-2 ">
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid">
          <span className="navbar-brand me-5 ps-3" href="#">
            Assets_Manager
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 me-2 mb-lg-0">
              <li className="nav-item my-nav  me-2">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item my-nav">
                <NavLink
                  to="/assets"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Assets
                </NavLink>
              </li>
            </ul>
            <form className="d-flex pe-4" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
