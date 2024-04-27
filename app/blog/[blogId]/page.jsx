import ContentRenderer from "@/app/components/ContentRenderer";
import { BASE_API_URL } from "@/app/constant";

export async function generateMetadata({ params }) {
  const { blogId } = params;
  const blog = await fetchBlog(blogId);
  return {
    title: blog.title,
  };
}

const fetchBlog = async (blogId) => {
  try {
    const response = await fetch(`${BASE_API_URL}/api/blogs/${blogId}`, {
      cache: "no-store",
    });
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
  const { blogId } = params;
  const blog = await fetchBlog(blogId);
  console.log(blog);

  return (
    <main>
      <section className="max-w-[1008px] mx-auto w-full px-4  md:px-[108px] text-[#CCCCCC]">
        <h1 className="text-3xl font-semibold tracking-wide my-8">
          {blog.title}
        </h1>
        <ContentRenderer content={blog.content} />
      </section>
    </main>
  );
};

export default page;
