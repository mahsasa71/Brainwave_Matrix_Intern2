import React from "react";
import { useNavigate } from "react-router-dom";
import FlagSwiper from "../../component/FlagSwiper";
import TabComponent from "../../component/tablist/TabComponent";
import TrustSection from "../../component/TrustSection ";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="hero min-h-screen mb-8 overflow-hidden"
        style={{
          backgroundImage: "url(../../public/images/2.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Heritage Looms</h1>
            <p className="mb-5">
              We offer handwoven carpets, machine-made rugs, and decorative
              tableau rugs. Our handwoven carpets showcase timeless beauty,
              while machine-made rugs provide durability and style. Our tableau
              rugs add a touch of Persian artistry to any space.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => navigate("/productcategory")}
            >
              See our products
            </button>
          </div>
        </div>
      </div>

      <TabComponent />
      <h1 className="text-center font-extrabold">Our customers</h1>
      <div className="mt-4 my-20">
        <FlagSwiper />
      </div>

      <TrustSection />
    </div>
  );
}
