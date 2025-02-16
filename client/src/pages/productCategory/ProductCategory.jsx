import React from "react";
import BubbleText from "../../component/BubbleText";
import Motion from "../motion/Motion";

export default function ProductCategory({ mainBackgroundColor }) {
  return (
    <>
      <div className="grid h-72 place-content-center">
        <BubbleText />
      </div>
      <Motion backgroundColor={mainBackgroundColor} />
    </>
  );
}
