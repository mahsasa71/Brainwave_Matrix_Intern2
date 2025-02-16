import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faLeaf,
  faHeartbeat,
} from "@fortawesome/free-solid-svg-icons";

const TrustSection = () => {
  return (
    <section className="py-10 mt-25">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left">
          <div className="mb-5 md:mb-0 md:ml-auto">
            <img
              src="../../public/images/logo.jpg"
              alt="Heritage Looms Logo"
              className="mx-auto md:mx-0 w-48 md:w-64 lg:w-80"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-red-500 font-bold text-4xl">
              {" "}
              We owe our trust to you
            </h1>
            <p className="text-gray-500 my-5">
              Your satisfaction is our priority; experience a new level of
              customer service with us!
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center my-5 text-center">
          <div className="w-full md:w-1/2 lg:w-1/3 px-5 mb-5">
            <FontAwesomeIcon
              icon={faAward}
              className="text-yellow-500 text-6xl"
            />
            <h1 className="text-gray-700 mt-4"> Top Award</h1>
            <p className="text-gray-500 mt-2">
              Experience quality with our authentic and standard products!
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-5 mb-5">
            <FontAwesomeIcon
              icon={faLeaf}
              className="text-green-500 text-6xl"
            />
            <h1 className="text-gray-700 mt-4">100% Natural </h1>
            <p className="text-gray-500 mt-2">
              Our completely natural products come from the heart of nature to
              your hands. By shopping with us, bring health and freshness into
              your life.
            </p>
          </div>
          <div className="w-full lg:w-1/3 px-5 mb-5">
            <FontAwesomeIcon
              icon={faHeartbeat}
              className="text-red-500 text-6xl"
            />
            <h1 className="text-gray-700 mt-4"> Health-Friendly</h1>
            <p className="text-gray-500 mt-2">
              Enhance your health to the highest level with our natural and
              organic products!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
