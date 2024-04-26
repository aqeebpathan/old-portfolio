const fetchBlog = async (blogId) => {
  try {
    const response = await fetch(`http://localhost:3000/api/blogs/${blogId}`);
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

  return <main>{JSON.stringify(blog)}</main>;
};

export default page;
