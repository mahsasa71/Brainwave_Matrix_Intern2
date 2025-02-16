import React, { useCallback, useEffect, useState } from "react";
import routes from "./Routs";
import CartTab from "./component/cartTab";
import { useSelector, useDispatch } from "react-redux";
import NavbarHeader from "./component/NavbarHeader";
import { useRoutes } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import Footer from "./component/footer/Footer";
import { clearCart } from "./store/Cart";

function App() {
  const statusTabCart = useSelector((store) => store.cart.statusTab);
  const router = useRoutes(routes);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [userInfos, setUserInfos] = useState({});
  const [headerFooterColor, setHeaderFooterColor] = useState(
    localStorage.getItem("headerFooterColor") || "bg-base-100"
  );
  const [mainBackgroundColor, setMainBackgroundColor] = useState(
    localStorage.getItem("mainBackgroundColor") || "bg-base-100"
  );
  const [textColor, setTextColor] = useState(
    localStorage.getItem("textColor") || "text-black"
  );
  const dispatch = useDispatch();

  const login = (userInfos, token) => {
    setToken(token);
    setIsLoggedIn(true);
    setUserInfos(userInfos);
    localStorage.setItem("user", JSON.stringify({ token }));
  };

  const logout = useCallback(() => {
    setToken(null);
    setUserInfos({});
    localStorage.removeItem("user");
    dispatch(clearCart());
  }, [dispatch]);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    if (localStorageData) {
      fetch(`http://localhost:4000/v1/auth/me`, {
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      })
        .then((res) => res.json())
        .then((userData) => {
          setIsLoggedIn(true);
          setUserInfos(userData);
          setToken(localStorageData.token);
        });
    } else {
      setIsLoggedIn(false);
    }
  }, [login, logout]);

  const changeBackgroundColor = () => {
    const newHeaderFooterColor =
      headerFooterColor === "bg-base-100" ? "bg-gray-500" : "bg-base-100";
    const newMainBackgroundColor =
      mainBackgroundColor === "bg-base-100" ? "bg-black" : "bg-base-100";
    const newTextColor =
      textColor === "text-black" ? "text-white" : "text-black";

    setHeaderFooterColor(newHeaderFooterColor);
    setMainBackgroundColor(newMainBackgroundColor);
    setTextColor(newTextColor);

    localStorage.setItem("headerFooterColor", newHeaderFooterColor);
    localStorage.setItem("mainBackgroundColor", newMainBackgroundColor);
    localStorage.setItem("textColor", newTextColor);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        token,
        userInfos,
        login,
        logout,
      }}
    >
      <div className={`min-h-screen ${mainBackgroundColor} ${textColor}`}>
        <NavbarHeader
          backgroundColor={headerFooterColor}
          textColor={textColor}
          changeBackgroundColor={changeBackgroundColor}
        />
        <main
          className={`max-w-full m-auto transform transition-transform duration-500 ${
            statusTabCart === false ? "" : "-translate-y-56"
          }`}
        >
          {router}
        </main>
        <CartTab />
        <Footer backgroundColor={headerFooterColor} textColor={textColor} />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
