import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/Cart";
import AuthContext from "../context/AuthContext";

export default function ProductCart(props) {
  const [productData, setProductData] = useState(null);
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log(`Fetching product with ID: ${props.data.id}`);
    fetch(
      `https://vwzfwcwsvsdfbjatanwa.supabase.co/rest/v1/products?id=eq.${props.data.id}`,
      {
        headers: {
          apikey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3emZ3Y3dzdnNkZmJqYXRhbndhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0NjE0MzYsImV4cCI6MjA1MzAzNzQzNn0.s65klO1CHhWEWXDVOk0DCEc3mNIVpRlBtyr2kGmVWys",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3emZ3Y3dzdnNkZmJqYXRhbndhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0NjE0MzYsImV4cCI6MjA1MzAzNzQzNn0.s65klO1CHhWEWXDVOk0DCEc3mNIVpRlBtyr2kGmVWys",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched product data:", data);
        if (data.length > 0) {
          setProductData(data[0]);
        } else {
          console.error("Product not found:", data);
        }
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [props.data.id]);

  const handleAddToCart = () => {
    if (productData) {
      dispatch(
        addToCart({
          productId: productData.id,
          quantity: 1,
        })
      );
    }
  };

  if (!productData) {
    return <div>Loading...</div>;
  }

  const { id, name, price, image, slug } = productData;

  return (
    <div className="bg-gray-200 p-5 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 my-3">
      <Link to={`/${slug}`}>
        <img
          src={image}
          alt={name}
          className="w-full h-80 object-cover object-top rounded-t-xl"
        />
      </Link>
      <h3 className="text-2xl py-3 text-center font-semibold text-gray-900">
        {name}
      </h3>
      <div className="flex justify-between items-center">
        <p className="text-lg text-gray-600">
          $<span className="text-2xl font-medium text-gray-900">{price}</span>
        </p>
        {authContext.isLoggedIn ? (
          <button
            className="bg-blue-500 text-white p-2 rounded-md text-sm hover:bg-blue-600 flex items-center gap-2 transition-colors duration-300"
            onClick={handleAddToCart}
          >
            <FontAwesomeIcon icon={faShoppingCart} className="w-5" />
            Add To Cart
          </button>
        ) : (
          <p className="text-red-500 font-bold">برای ثبت سفارش لاگین کنید</p>
        )}
      </div>
    </div>
  );
}
