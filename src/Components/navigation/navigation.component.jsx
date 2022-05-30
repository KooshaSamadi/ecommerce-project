import { React, Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as Ecom } from "../../Assets/ecommerce.svg";
import { UserContext } from "../../Contexts/user.context";
import { singOutUSer } from "../../Utils/firebase/firebase.utils";
import CardIcon from "../cart-icon/cart-icon.component";
function Navigation() {
  const { currentUser } = useContext(UserContext);
  //console.log(currentUser);

  return (
    <Fragment>
      <nav className="navbar navbar-expand-sm navbar-light ">
        <div className="container-fluid logo-container">
          <Link className="navbar-brand" to="/">
            <Ecom />
          </Link>
        </div>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
              {currentUser ? (
                <span className="nav-item nav-link" onClick={singOutUSer}>
                  Sing out
                </span>
              ) : (
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/authentication"
                >
                  Sing In
                </Link>
              )}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <CardIcon />
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
