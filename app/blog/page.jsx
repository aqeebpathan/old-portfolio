import Blogs from "../components/Blogs";
import { BASE_API_URL } from "../constant";

export const metadata = {
  title: "Blogs by aqeeb.dev",
  description:
    "DevLog. Navigating Updates, Conversations, and Frontend Creations.",
  keywords: [
    "mohmmed aqeeb",
    "aqeeb pathan",
    "mohmmed aqeeb pathan",
    "aqeeb frontend",
    "aqeeb",
  ],
  author: [{ name: "Mohmmed Aqeeb Pathan" }],
  url: "https://aqeeb.dev/blog",
  siteName: "Mohmmed Aqeeb's Portfolio",
  type: "website",
  publisher: "Mohmmed Aqeeb Pathan",
  creator: "Mohmmed Aqeeb Pathan",
};

const fetchBlogs = async () => {
  try {
    const response = await fetch(`${BASE_API_URL}/api/blogs`, {
      next: { revalidate: 2592000 },
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
  if (!BASE_API_URL) {
    return null;
  }

  const blogs = await fetchBlogs();
  return (
    <main>
      <Blogs blogs={blogs} />
    </main>
  );
};

export default page;
