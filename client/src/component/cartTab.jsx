import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import CartItem from "./CartItem";
import { toggleStatusTab, clearCart } from "../store/Cart";

const CartTab = () => {
  const carts = useSelector((store) => store.cart.items);
  const statusTab = useSelector((store) => store.cart.statusTab);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
  };

  const handleCheckout = () => {
    navigate("/success");
  };

  useEffect(() => {
    if (location.pathname === "/success") {
      dispatch(clearCart());
      dispatch(toggleStatusTab());
    }
  }, [location, dispatch]);

  return (
    <div
      className={`fixed top-0 left-0 bg-gray-700 shadow-2xl w-full h-96 grid grid-rows-[60px_1fr_60px] transform transition-transform duration-500 ${
        statusTab === false ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <h2 className="p-5 text-white text-2xl">Shopping Cart</h2>
      <div className="p-5 overflow-y-auto">
        {carts.map((item, key) => (
          <CartItem key={key} data={item} />
        ))}
      </div>
      <div className="grid grid-cols-2">
        <button className="bg-black text-white" onClick={handleCloseTabCart}>
          CLOSE
        </button>
        <button className="bg-amber-600 text-white" onClick={handleCheckout}>
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartTab;
