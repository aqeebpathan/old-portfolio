"use client";

import { useState, useEffect } from "react";
import { aboutPara } from "../constant";

const Hero = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Check if username exists in localStorage
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      // If username exists, set it to state
      setUsername(storedUsername);
    } else {
      // If username doesn't exist, prompt the user
      const userInput = prompt("What shall I call you?", "Guest");
      if (userInput) {
        // If user provides a username, set it to state and localStorage
        setUsername(userInput);
        localStorage.setItem("username", userInput);
      } else {
        // If user cancels or leaves prompt empty, set default value to "Guest"
        setUsername("Guest");
        localStorage.setItem("username", "Guest");
      }
    }
  }, []); // Empty dependency array means this effect runs once, similar to componentDidMount

  return (
    <section>
      <div className="max-w-[1008px] mx-auto w-full py-[8rem] px-4 lg:px-0 sticky top-[3.75rem] z-10">
        <h3 className="text-[14px] text-[#a9a9a9] sm:text-[16px] max-w-min px-3 border border-[#252525] leading-[22px] rounded-full">
          aqeeb.dev
        </h3>
        <h1 className="text-[calc(6.25vw+18px)] lg:text-8xl font-bold leading-none">
          Frontend Developer
          <br />
          Creative
        </h1>
      </div>
      <div className="w-[calc(100%-2rem)] max-w-[calc(1200px-2rem)] mx-auto  rounded-[11px] bg-[#242427] relative z-40 ">
        <div className="flex items-center h-[15px] md:h-[25px] px-[5px] md:px-[10px] z-50 w-full  rounded-t-[10px] bg-[#323235]">
          <span className="w-2 lg:w-[14px] h-2 lg:h-[14px] mx-[3px] inline-block bg-[#242426] rounded-full"></span>
          <span className="w-2 lg:w-[14px] h-2 lg:h-[14px] mx-[3px] inline-block bg-[#242426] rounded-full"></span>
          <span className="w-2 lg:w-[14px] h-2 lg:h-[14px] mx-[3px] inline-block bg-[#242426] rounded-full"></span>
        </div>
        <div className="px-[5px] md:px-[10px] py-10">
          <h1 className="sm:text-7xl text-[calc(1.11111vw+36px)]">
            👋Hii {username}
          </h1>
          <p className="text-[24px] sm:text-[calc(1.11111vw+16px)] mt-8">
            {aboutPara}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
