import Blogs from "../components/Blogs";

const fetchBlogs = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/blogs");
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

const page = async () => {
  const blogs = await fetchBlogs();
  return (
    <main>
      <Blogs blogs={blogs} />
    </main>
  );
};

export default page;
