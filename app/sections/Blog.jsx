import React from "react";
import { blogs } from "../constant";
import Link from "next/link";

const Blog = () => {
  return (
    <section>
      <div className="max-w-[1008px] mx-auto w-full my-48 px-4 lg:px-0">
        <h1 className="text-[24px] sm:text-[calc(1.11111vw+16px)] tracking-wide leading-[1.3] font-semibold">
          Frontend Frenzy 💻
          <span className="text-[#8e8e98]">What&apos;s in Store?</span>
        </h1>
        <div>
          <ul className="my-12">
            {blogs.map((blog, i) => (
              <li key={i} className="my-6 flex gap-8 text-[18px] ">
                <div className="flex-shrink-0">
                  <span className="text-[#8e8e98] font-medium">
                    {blog.date}
                  </span>
                </div>
                <div>
                  <Link href={blog.href} className="hover:underline">
                    {blog.title}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Link
          className="bg-[#8e8e98] text-[15px] text-black p-2 rounded-md "
          href={"/blog"}
        >
          Read All
        </Link>
      </div>
    </section>
  );
};

export default Blog;
