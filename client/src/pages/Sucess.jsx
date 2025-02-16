import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../store/Cart";

export default function Success() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBack = () => {
    dispatch(clearCart());
    navigate("/");
  };

  return (
    <>
      <div>Success</div>
      <button onClick={handleBack}>back</button>
    </>
  );
}
