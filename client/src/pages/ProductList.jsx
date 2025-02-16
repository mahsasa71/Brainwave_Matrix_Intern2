import React, { useEffect, useState } from "react";
import ProductCart from "../component/ProductCart";
import { useParams } from "react-router-dom";
import Loading from "../component/Loading";

export default function ProductList() {
  const { subheading } = useParams();
  const [products, setProducts] = useState([]);
  const [headerImages, setHeaderImages] = useState({});
  const [shuffledImages, setShuffledImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
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
        if (Array.isArray(data)) {
          let filteredProducts = [];
          if (subheading === "traditional handmade") {
            filteredProducts = data.filter(
              (product) => product.category === "سنتی"
            );
          } else if (subheading === "Modern and Machine-made Carpet") {
            filteredProducts = data.filter(
              (product) => product.category === "modern"
            );
          } else if (subheading === "Pictorial Carpet") {
            filteredProducts = data.filter(
              (product) => product.category === "classic"
            );
          }
          setProducts(filteredProducts);
        } else {
          console.error("Fetched data is not an array:", data);
        }
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [subheading]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://vwzfwcwsvsdfbjatanwa.supabase.co/rest/v1/headerpic?select=*",
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
        if (Array.isArray(data)) {
          let filteredHeaderImages = {};
          data.forEach((image) => {
            if (
              subheading === "traditional handmade" &&
              [1, 4, 5, 6].includes(image.id)
            ) {
              filteredHeaderImages[image.id] = image.image;
            } else if (
              subheading === "Modern and Machine-made Carpet" &&
              [2, 7, 8, 9].includes(image.id)
            ) {
              filteredHeaderImages[image.id] = image.image;
            } else if (
              subheading === "Pictorial Carpet" &&
              [3, 10, 11, 12].includes(image.id)
            ) {
              filteredHeaderImages[image.id] = image.image;
            }
          });
          setHeaderImages(filteredHeaderImages);
          setShuffledImages(shuffleArray(Object.keys(filteredHeaderImages)));
        } else {
          console.error("Fetched data is not an array:", data);
        }
      })
      .catch((error) => console.error("Error fetching header images:", error));
  }, [subheading]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-2">
      <h1>Product List for {subheading}</h1>
      <div className="flex justify-center items-center gap-y-0.5 gap-x-1 p-1 my-1 h-2/3">
        {renderImages(subheading, headerImages, shuffledImages)}
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 px-3 my-4 h-1/3">
        {Array.isArray(products) &&
          products.map((product, key) => (
            <ProductCart key={key} data={product} />
          ))}
      </div>
    </div>
  );
}

function renderImages(subheading, headerImages, shuffledImages) {
  return shuffledImages.map((id, index) => (
    <div key={id} className={`h-100 ${index % 2 === 0 ? "w-2/3" : "w-1/3"}`}>
      <img
        src={headerImages[id] || ""}
        alt={`Image ${id}`}
        className="w-full h-60 object-cover bg-slate-900 rounded-tr-badge rounded-lg rounded-bl-badge"
      />
    </div>
  ));
}

function shuffleArray(array) {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}
