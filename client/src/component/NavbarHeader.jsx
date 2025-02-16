import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AuthContext from "../context/AuthContext";
import { toggleStatusTab } from "../store/Cart";
import iconCart from "../../public/images/iconCart.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const NavbarHeader = ({
  backgroundColor,
  textColor,
  changeBackgroundColor,
}) => {
  const authContext = useContext(AuthContext);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [isDay, setIsDay] = useState(true);
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  };

  const handleToggleTheme = () => {
    setIsDay(!isDay);
    changeBackgroundColor();
  };

  return (
    <div className={`navbar px-4 ${backgroundColor} ${textColor}`}>
      <div className="flex-1 flex items-center mr-10">
        <img src="../../public/images/logo.jpg" className="w-10 mb-2" />
        {authContext.isLoggedIn && (
          <button className={`btn btn-ghost ${textColor} ml-4`}>
            {authContext.userInfos.name}
          </button>
        )}
      </div>
      <div className="flex-none gap-2">
        <div
          className="w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative"
          onClick={handleOpenTabCart}
        >
          <img src={iconCart} alt="" className="w-6" />
          <span className="absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center">
            {totalQuantity}
          </span>
        </div>
        <div className="hidden md:flex gap-4">
          <Link to="/profile" className={`btn btn-ghost ${textColor}`}>
            Profile
          </Link>
          {authContext.isLoggedIn ? (
            <button
              className={`btn btn-ghost ${textColor}`}
              onClick={authContext.logout}
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className={`btn btn-ghost ${textColor}`}>
                Login
              </Link>
              <Link to="/register" className={`btn btn-ghost ${textColor}`}>
                Register
              </Link>
            </>
          )}
        </div>
        <button onClick={handleToggleTheme} className="btn btn-primary">
          <FontAwesomeIcon icon={isDay ? faSun : faMoon} />
        </button>
        <div className="dropdown dropdown-end md:hidden">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle"
            htmlFor="menu-toggle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </label>
          <input type="checkbox" id="menu-toggle" className="hidden" />
          <ul
            tabIndex={0}
            className={`menu menu-compact dropdown-content mt-3 p-2 shadow ${backgroundColor} rounded-box w-52`}
            style={{ zIndex: 1000 }}
          >
            <li>
              <Link to="/profile" className={textColor}>
                Profile
              </Link>
            </li>
            {authContext.isLoggedIn ? (
              <li>
                <button onClick={authContext.logout} className={textColor}>
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/login" className={textColor}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" className={textColor}>
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarHeader;
