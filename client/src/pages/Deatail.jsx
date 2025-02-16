import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/Cart";
import SimilarProductCart from "../component/SimilarProductCart";
import AuthContext from "../context/AuthContext";
import Loading from "../component/Loading";
import "./Deatail.css";

const Detail = ({ textColor }) => {
  const { slug } = useParams();
  const [detail, setDetail] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState(null);
  const [comments, setComments] = useState([]);
  const [answerComments, setAnswerComments] = useState([]);
  const [newComment, setNewComment] = useState({ body: "" });
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const authContext = useContext(AuthContext);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    console.log(`Fetching product with slug: ${slug}`);
    fetch(
      `https://vwzfwcwsvsdfbjatanwa.supabase.co/rest/v1/products?slug=eq.${slug}&select=id,name,price,image,description,category`,
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
        console.log("Fetched product detail:", data);
        if (data.length > 0) {
          setDetail(data[0]);
          setCategory(data[0].category);
          fetchComments(data[0].id);
        } else {
          console.error("Product not found:", data);
          window.location.href = "/";
        }
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [slug]);

  const fetchComments = (productId) => {
    fetch(
      `https://vwzfwcwsvsdfbjatanwa.supabase.co/rest/v1/comments?select=*`,
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
        console.log("Fetched comments:", data);
        if (Array.isArray(data)) {
          setComments(data);
        } else {
          console.error("Received comments data is not an array:", data);
        }
      })
      .catch((error) => console.error("Error fetching comments:", error));
  };

  const fetchAnswerComments = () => {
    fetch(
      `https://vwzfwcwsvsdfbjatanwa.supabase.co/rest/v1/answer_comment?select=*`,
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
        console.log("Fetched answer comments:", data);
        if (Array.isArray(data)) {
          setAnswerComments(data);
        } else {
          console.error("Received answer comments data is not an array:", data);
        }
      })
      .catch((error) =>
        console.error("Error fetching answer comments:", error)
      );
  };

  useEffect(() => {
    fetchAnswerComments();
  }, []);

  const handleMinusQuantity = () => {
    setQuantity((prev) => (prev - 1 < 1 ? 1 : prev - 1));
  };

  const handlePlusQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCart = () => {
    if (detail) {
      dispatch(
        addToCart({
          productId: detail.id,
          quantity: quantity,
        })
      );
    }
  };

  const handleCommentChange = (e) => {
    const { name, value } = e.target;
    setNewComment((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const commentId = Math.floor(Math.random() * 1000000);
    fetch("https://vwzfwcwsvsdfbjatanwa.supabase.co/rest/v1/comments", {
      method: "POST",
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3emZ3Y3dzdnNkZmJqYXRhbndhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0NjE0MzYsImV4cCI6MjA1MzAzNzQzNn0.s65klO1CHhWEWXDVOk0DCEc3mNIVpRlBtyr2kGmVWys",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3emZ3Y3dzdnNkZmJqYXRhbndhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0NjE0MzYsImV4cCI6MjA1MzAzNzQzNn0.s65klO1CHhWEWXDVOk0DCEc3mNIVpRlBtyr2kGmVWys",
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        id: commentId,
        product_id: detail.id,
        body: newComment.body,
        name: authContext.userInfos.name,
        is_shown: 1,
        role: "user",
      }),
    })
      .then((response) => {
        if (response.ok) {
          setComments((prev) => [
            ...prev,
            {
              id: commentId,
              product_id: detail.id,
              body: newComment.body,
              name: authContext.userInfos.name,
              is_shown: 1,
              role: "user",
            },
          ]);
          setNewComment({ body: "" });
        } else {
          console.error("Error submitting comment:", response);
        }
      })
      .catch((error) => console.error("Error submitting comment:", error));
  };

  if (isLoading) {
    return <Loading />;
  }

  if (!detail) {
    return <div>Loading...</div>;
  }

  const filteredComments = comments.filter(
    (comment) => comment.product_id === detail.id
  );

  return (
    <div className={`p-5 ${textColor} overflow-x-hidden`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 p-5">
        <div className="flex justify-center">
          <img src={detail.image} alt={detail.name} className="product-image" />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className={`text-2xl md:text-3xl font-bold ${textColor}`}>
            {detail.name}
          </h1>
          <p className={`text-base md:text-xl ${textColor}`}>
            {detail.description}
          </p>
          <p className={`text-xl md:text-2xl font-semibold ${textColor}`}>
            ${detail.price}
          </p>
          <div className="flex items-center gap-3">
            <button onClick={handleMinusQuantity} className="quantity-button">
              -
            </button>
            <span className={`text-lg md:text-xl ${textColor}`}>
              {quantity}
            </span>
            <button onClick={handlePlusQuantity} className="quantity-button">
              +
            </button>
          </div>
          {authContext.isLoggedIn ? (
            <button onClick={handleAddToCart} className="add-to-cart-button">
              Add to Cart
            </button>
          ) : (
            <p className="mt-5 text-red-500">
              You must log in to place an order.
            </p>
          )}
        </div>
      </div>

      <div className="mt-10 p-5">
        <h2 className={`text-xl md:text-2xl font-bold ${textColor}`}>
          Similar Products
        </h2>
        <SimilarProductCart category={category} id={detail.id} />
      </div>

      <div className="mt-10 p-5">
        <h2 className={`text-xl md:text-2xl font-bold ${textColor}`}>
          Comments
        </h2>
        {authContext.isLoggedIn ? (
          <form onSubmit={handleCommentSubmit} className="mt-5">
            <textarea
              name="body"
              value={newComment.body}
              onChange={handleCommentChange}
              className="comment-textarea"
              placeholder="Write a comment..."
            />
            <button type="submit" className="submit-comment-button">
              Submit
            </button>
          </form>
        ) : (
          <p className="mt-5 text-red-500">
            To post a comment, you must log in.
          </p>
        )}

        <div className="mt-5">
          {filteredComments.length > 0 ? (
            filteredComments.map((comment) => (
              <div key={comment.id} className="comment-card">
                <span className={`text-sm ${textColor}`}>- {comment.name}</span>
                <p className={`${textColor}`}>{comment.body}</p>
                {answerComments
                  .filter((answer) => answer.comment_id === comment.id)
                  .map((answer) => (
                    <div key={answer.id} className="answer-comment-card">
                      <p className={`${textColor}`}>{answer.body}</p>
                      <span className={`text-sm ${textColor}`}>
                        {answer.name}
                      </span>
                    </div>
                  ))}
              </div>
            ))
          ) : (
            <p className={`${textColor}`}>
              There are currently no comments for this product.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
