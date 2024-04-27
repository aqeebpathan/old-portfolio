import Blogs from "../components/Blogs";
import { BASE_API_URL } from "../constant";

const fetchBlogs = async () => {
  try {
    const response = await fetch(`${BASE_API_URL}/api/blogs`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const blog = await response.json();
    return blog;
  } catch (error) {
    console.error("Error fetching blog:", error.message);
    return [];
  }
};

const page = async () => {
  const blogs = await fetchBlogs();
  return (
    <main>
      <Blogs blogs={blogs} />
    </main>
  );
};

export default page;
