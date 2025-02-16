import React from "react";

import backgroundImage from "../../public/images/svg-bg1.svg";

import MapComponent from "../component/MapComponent";

const ContactUs = ({ mainBackgroundColor, textColor }) => {
  return (
    <>
      <section
        className={`p-5 ${mainBackgroundColor}`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
        }}
      >
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className={`text-4xl font-bold ${textColor}`}>Contac Us:</h1>
            <p className={`my-5 ${textColor}`}>
              We're here to assist you! Reach out to us for any inquiries,
              support, or feedback.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full lg:w-5/12 p-5 my-5">
              <h3 className={`text-2xl ${textColor}`}>Call Information:</h3>
              <p className={`mt-5 ${textColor}`}>
                <i className="fas fa-map-marker-alt mt-5"></i> Address:Beheshti
                Street-Tehran-Iran
              </p>
              <p className={textColor}>
                <i className="fas fa-phone"></i> phone: 1234567890
              </p>
              <p className={textColor}>
                <i className="fas fa-envelope"></i>Email:
                <a href="mailto:example@example.com">example@example.com</a>{" "}
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full">
              <MapComponent />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
