import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const SimilarProductCart = ({ category, id }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    console.log("Fetching all products");
    fetch(
      "https://vwzfwcwsvsdfbjatanwa.supabase.co/rest/v1/products?select=*",
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
        console.log("Fetched products:", data);
        setProducts(data);
        const filtered = data.filter(
          (product) => product.category === category && product.id !== id
        );
        setFilteredProducts(filtered);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [category, id]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <>
      <section id="product-list">
        <div className="container mx-auto px-3">
          <h2 className="mb-1 text-3xl font-semibold text-center">
            similar Products
          </h2>
        </div>
      </section>

      <section className="py-32">
        <div className="relative flex justify-center max-w-7xl mx-auto space-y-1 px-10 md:px-6 md:space-y-0 md:space-x-7">
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <div
                key={product.id}
                className="flex flex-col w-full text-center rounded-lg md:w-1/6 bg-gray-200 mb-4"
                style={{ minWidth: "200px", maxWidth: "200px" }}
              >
                <div className="flex justify-center">
                  <Link to={`/${product.slug}`}>
                    <img
                      className="rounded-t-lg"
                      src={product.image}
                      alt={product.name}
                      style={{ width: "150px", height: "150px" }}
                    />
                  </Link>
                </div>

                <h5 className="pt-6 mb-2 text-2xl text-black font-bold">
                  {product.name}
                </h5>
                <div className="flex justify-center gap-1 text-black text-lg">
                  <p>$</p>
                  <p>{product.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p>there is no similar product</p>
          )}
        </div>
        {currentProducts.length > 0 && (
          <div className="flex justify-center mt-4">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </section>
    </>
  );
};

export default SimilarProductCart;
