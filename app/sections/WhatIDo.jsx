import Image from "next/image";
import { githubNote, whatIDo, whatIDoContinue } from "../constant";
import Link from "next/link";

const WhatIDo = () => {
  return (
    <section>
      <div className="max-w-[1008px] mx-auto w-full my-48 px-4 lg:px-0">
        <h1 className="text-[24px] sm:text-[calc(1.11111vw+16px)] tracking-wide leading-[1.3] font-semibold">
          Wondering what I can do{" "}
          <Image
            src="/wondering.png"
            alt="ss"
            width={1080}
            height={1080}
            className="inline-block w-[30px] h-[30px] md:w-[35px] md:h-[35px]"
          />{" "}
          <span className="text-[#8e8e98]">
            {" "}
            {whatIDo}{" "}
            <Image
              src="/boost.png"
              alt="on fire"
              width={1080}
              height={1080}
              className="inline-block w-[30px] h-[30px] md:w-[35px] md:h-[35px] "
            />{" "}
            {whatIDoContinue}{" "}
            <Link href="/" className=" hover:text-white">
              together?
            </Link>
          </span>
        </h1>
        <p className="text-[.875rem] text-[#8e8e98] max-w-[80%] md:max-w-[33%] leading-tight mt-8">
          {githubNote}{" "}
          <Link
            href="https://github.com/aqeebpathan/"
            className="text-[#196cfa]"
          >
            github@aqeebpathan
          </Link>
        </p>
      </div>
    </section>
  );
};

export default WhatIDo;
