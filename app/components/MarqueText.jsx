import React from "react";

const MarqueeText = () => {
  return (
    <div className=" overflow-hidden bg-[#ffdc00] md:text-xl uppercase text-black font-pridi">
      <div className="marquee__inner">
        <p className="marquee__line">
          hey there! This is my temporary porfolio hangout – a cozy corner where
          I&apos;m tinkering away on some frontend fun. Stay tuned for the magic
          to unfold!
        </p>
        <p className="marquee__line">
          hey there! This is my temporary porfolio hangout – a cozy corner where
          I&apos;m tinkering away on some frontend fun. Stay tuned for the magic
          to unfold!
        </p>
      </div>
    </div>
  );
};

export default MarqueeText;
