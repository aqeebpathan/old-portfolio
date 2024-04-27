import { BASE_API_URL } from "@/app/constant";

export async function generateMetadata({ params }) {
  const { blogId } = params;
  const blog = await fetchBlog(blogId);
  const desc = blog.content[0].description;

  return {
    title: blog.title,
    description: desc,
    keywords: blog.title,
    author: [{ name: "Mohmmed Aqeeb Pathan" }],
    url: `https://aqeeb.dev/blog${blogId}`,
    siteName: "Mohmmed Aqeeb's Portfolio",
    type: "website",
    publisher: "Mohmmed Aqeeb Pathan",
    creator: "Mohmmed Aqeeb Pathan",
    openGraph: {
      title: blog.title,
      description: desc,
    },
  };
}

const fetchBlog = async (blogId) => {
  try {
    const response = await fetch(`${BASE_API_URL}/api/blogs/${blogId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const blog = await response.json();
    return blog;
  } catch (error) {
    console.error("Error fetching blog:", error.message);
    return null;
  }
};

const page = async ({ params }) => {
  if (!BASE_API_URL) {
    return null;
  }

  const { blogId } = params;
  const blog = await fetchBlog(blogId);
  // console.log(blog);

  const blogTitle = blog.title;
  const colonIndex = blogTitle.indexOf(":");
  const beforeColon = blogTitle
    .substring(0, colonIndex + 1)
    .replace(":", " 🤝");
  const afterColon = blogTitle.substring(colonIndex + 1);

  return (
    <main>
      <section className="max-w-[1008px] mx-auto w-full px-4  md:px-[108px]  text-[#a9a9a9]">
        <h1 className="text-3xl font-semibold tracking-wide my-8">
          <span className="text-[#CCCCCC]">{beforeColon}</span>
          {afterColon}
        </h1>
        <div className="mb-16">
          {blog.content.map((paragraph, i) => (
            <div key={i}>
              <h3 className="my-2 font-bold text-[19px] text-[#CCCCCC]">
                {paragraph.title && paragraph.title}
              </h3>
              <h5 className="font-bold text-[#CCCCCC]">
                {paragraph.subTitle && paragraph.subTitle}
              </h5>
              <p className="text-[17px] mb-8">{paragraph.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default page;
