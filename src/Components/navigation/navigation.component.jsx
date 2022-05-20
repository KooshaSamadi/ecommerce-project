import { React, Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as Ecom } from "../../Assets/ecommerce.svg";

function Navigation() {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-sm navbar-light ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <Ecom />
          </Link>
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
        </div>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/authentication">
                Sing In
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">
                Shop
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
