import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("panel-1");
  const navigate = useNavigate();

  const handleTabClick = (panel) => {
    setActiveTab(panel);
  };

  const handleMoreClick = (route) => {
    navigate(route);
  };

  return (
    <section>
      <div className="container relative mx-auto my-6 mb-32 mt-12 px-6">
        <div className="flex flex-row justify-center max-w-xl mx-auto mb-6 space-x-2 md:space-x-10">
          <div
            className={`flex justify-center text-center cursor-pointer w-full md:w-1/3 tab ${
              activeTab === "panel-1" ? "md:border-b-4 md:border-gray-400" : ""
            }`}
            onClick={() => handleTabClick("panel-1")}
          >
            <div className="py-5 w-full" data-target="panel-1">
              contact us
            </div>
          </div>

          <div
            className={`flex justify-center text-center cursor-pointer w-full md:w-1/3 tab ${
              activeTab === "panel-2" ? "md:border-b-4 md:border-gray-400" : ""
            }`}
            onClick={() => handleTabClick("panel-2")}
          >
            <div className="py-5 w-full" data-target="panel-2">
              about us
            </div>
          </div>

          <div
            className={`flex justify-center text-center cursor-pointer w-full md:w-1/3 tab ${
              activeTab === "panel-3" ? "md:border-b-4 md:border-gray-400" : ""
            }`}
            onClick={() => handleTabClick("panel-3")}
          >
            <div className="py-5 w-full" data-target="panel-3">
              History
            </div>
          </div>
        </div>

        <div id="panels" className="container mx-auto">
          <div
            className={`flex flex-col py-5 md:flex-row-reverse md:space-x-7 panel ${
              activeTab === "panel-1" ? "" : "hidden"
            }`}
          >
            <div className="d-flex justify-center md:w-1/2 hidden md:flex">
              <img
                src="../../public/images/contract.jpg"
                className="relative w-2/3 rounded-lg"
                alt="contact us"
              />
            </div>

            <div className="flex flex-col space-y-8 md:w-1/3">
              <h3 className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-right">
                contact us
              </h3>
              <p className="text-center md:text-right">
                We are always here to assist you! If you have any questions,
                need support, or want to share your feedback, feel free to reach
                out to us. You can contact us via email, phone, or by filling
                out the contact form on our website. Our team is dedicated to
                providing prompt and helpful responses to ensure your
                satisfaction. We look forward to hearing from you!
              </p>
              <div className="mx-auto md:mx-0 text-right">
                <a
                  href="#"
                  className="px-6 py-3 mt-4 border-2 border-[#fafafa] rounded-lg md:inline-flex hover:bg-white hover:text-black hover:border-2"
                  onClick={() => handleMoreClick("/contactUs")}
                >
                  more
                </a>
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col py-5 md:flex-row-reverse md:space-x-7 panel ${
              activeTab === "panel-2" ? "" : "hidden"
            }`}
          >
            <div className="d-flex justify-center md:w-1/2 hidden md:flex">
              <img
                src="../../public/images/about.jpg"
                className="relative w-2/3 rounded-lg"
                alt="about us"
              />
            </div>

            <div className="flex flex-col space-y-8 md:w-1/3">
              <h3 className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-right">
                about us
              </h3>
              <p className="text-center md:text-right">
                We are always here to assist you! If you have any questions,
                need support, or want to share your feedback, feel free to reach
                out to us. You can contact us via email, phone, or by filling
                out the contact form on our website. Our team is dedicated to
                providing prompt and helpful responses to ensure your
                satisfaction. We look forward to hearing from you!
              </p>
              <div className="mx-auto md:mx-0 text-right">
                <a
                  href="#"
                  className="px-6 py-3 mt-4 border-2 border-[#fafafa] rounded-lg md:inline-flex hover:bg-white hover:text-black hover:border-2"
                  onClick={() => handleMoreClick("/aboutUs")}
                >
                  more
                </a>
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col py-5 md:flex-row-reverse md:space-x-7 panel ${
              activeTab === "panel-3" ? "" : "hidden"
            }`}
          >
            <div className="d-flex justify-center md:w-1/2 d-non md:flex">
              <img
                src="../../public/images/nab4.png"
                className="relative w-2/3 rounded-lg"
                alt="history"
              />
            </div>

            <div className="flex flex-col space-y-8 md:w-1/3">
              <h3 className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-right">
                history
              </h3>
              <p className="text-center md:text-right">
                Carpet weaving in Iran has a rich history dating back over 2,500
                years, making it one of the most significant aspects of Persian
                culture and art. Persian carpets are renowned worldwide for
                their intricate designs, vibrant colors, and exceptional
                craftsmanship. During the Safavid dynasty (16th–18th centuries),
                Persian carpet-making reached its peak, with master weavers
                producing some of the finest rugs ever made. Each region in Iran
                has its own unique weaving techniques and patterns, reflecting
                the country's diverse artistic heritage. Today, Iranian carpets
                remain highly valued, symbolizing elegance, tradition, and
                centuries of artistic excellence.
              </p>
              <div className="mx-auto md:mx-0 text-right">
                <a
                  href="#"
                  className="px-6 py-3 mt-4 border-2 border-[#fafafa] rounded-lg md:inline-flex hover:bg-white hover:text-black hover:border-2"
                  onClick={() => handleMoreClick("/history")}
                >
                  more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabComponent;
