import React from "react";
import ExampleContent from "./ExampleContent";
import TextParallaxContent from "../motion/TextParallaxContent ";

const Motion = ({ backgroundColor }) => {
  return (
    <div className={backgroundColor}>
      <TextParallaxContent
        imgUrl="../../public/images/14.jpg"
        subheading="traditional handmade"
        heading="A Fusion of Iranian Culture and Art"
      >
        <ExampleContent subheading="traditional handmade" />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="../../public/images/12.jpg"
        subheading="Modern and Machine-made Carpet"
        heading="A Fusion of Modernity and Art"
      >
        <ExampleContent subheading="Modern and Machine-made Carpet" />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="../../public/images/8.jpg"
        subheading="Pictorial Carpet"
        heading="Iranian Art on Your Home's Wall."
      >
        <ExampleContent subheading="Pictorial Carpet" />
      </TextParallaxContent>
    </div>
  );
};

export default Motion;
