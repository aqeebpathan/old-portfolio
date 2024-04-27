import Link from "next/link";

const Blogs = ({ blogs }) => {
  return (
    <>
      {blogs.map((blog) => (
        <div key={blog._id} className="flex justify-center gap-4 py-4">
          <Link href={`/blog/${blog._id}`}>{blog.title}</Link>
          <div>{blog.author}</div>
          <div>{blog.category}</div>
          <div>{blog.estimatedTime}</div>
          <div>{blog.createdAt}</div>
        </div>
      ))}
    </>
  );
};

export default Blogs;
