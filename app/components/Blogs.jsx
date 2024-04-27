import Image from "next/image";
import Link from "next/link";

const Blogs = ({ blogs }) => {
  return (
    <section>
      <div className="max-w-[1008px] mx-auto w-full my-12 px-4 lg:px-0 min-h-[calc(100vh-80px)]">
        <h1 className="text-[24px] text-[#8e8e98] sm:text-[calc(1.11111vw+16px)] mb-12 tracking-wide leading-[1.3] font-semibold">
          <span className="text-white"> DevLog.</span> Navigating Updates,{" "}
          Conversations, <br /> and Frontend Creations
        </h1>
        <ul>
          {blogs.map((blog, i) => (
            <li
              key={i}
              className="my-4  max-w-[500px] border border-[#393838] rounded-md p-4 hover:backdrop-blur-md"
            >
              <Link href={`/blog/${blog._id}`}>
                <div className="flex flex-row gap-6">
                  <div className="flex items-center flex-shrink-0">
                    <Image
                      src="/profile.jpeg"
                      alt="aqeeb.dev"
                      width={35}
                      height={35}
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="ml-2">
                      <p className="text-sm text-[#d2d2d6]">{blog.author}</p>{" "}
                      <p className="text-[12px] text-[#8e8e98]">
                        {blog.createdAt}
                      </p>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h1 className="text-[#d2d2d6] font-medium ">
                      {blog.title}
                    </h1>
                  </div>
                </div>

                {
                  <div className="text-[12px] mt-4 flex justify-between text-[#8e8e98]">
                    <p>{blog.category}</p>
                    <p>{blog.estimatedTime}</p>
                  </div>
                }
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Blogs;
