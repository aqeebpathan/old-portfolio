import connectMongoDB from "@/app/libs/mongodb";
import Blog from "@/app/models/blogs";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, content, author, category, estimatedTime, createdAt } =
      await request.json();

    if (!title || !content || !author || !category || !estimatedTime) {
      return new NextResponse("One or more required fields are missing", {
        status: 400,
      });
    }

    await connectMongoDB();
    const blog = await Blog.create({
      title,
      content,
      author,
      category,
      estimatedTime,
      createdAt,
    });

    if (!blog) {
      return new NextResponse("Blog creation failed", { status: 400 });
    }

    return new NextResponse(JSON.stringify(blog), { status: 201 });
  } catch (error) {
    console.log(error);
  }
}

export async function GET(request) {
  try {
    await connectMongoDB();
    const blogs = await Blog.find();

    if (!blogs || blogs.length === 0) {
      return new NextResponse("No blogs found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(blogs), { status: 200 });
  } catch (error) {
    console.log(error);
  }
}

// export async function GET(request) {
//   try {
//     await connectMongoDB();

//     // Extract the blogId from the request query
//     const { blogId } = request.query;

//     if (blogId) {
//       // If a blogId parameter is present, fetch the single blog
//       const blog = await Blog.findById(blogId);

//       if (!blog) {
//         // If no blog is found, return a 404 response
//         return new NextResponse("Blog not found", { status: 404 });
//       }

//       // Return the found blog as JSON
//       return new NextResponse(JSON.stringify(blog), { status: 200 });
//     } else {
//       // If no blogId parameter is present, fetch all blogs
//       const blogs = await Blog.find();

//       if (!blogs || blogs.length === 0) {
//         // If no blogs are found, return a 404 response
//         return new NextResponse("No blogs found", { status: 404 });
//       }

//       // Return the found blogs as JSON
//       return new NextResponse(JSON.stringify(blogs), { status: 200 });
//     }
//   } catch (error) {
//     console.error(error);
//     // Return a generic error response
//     return new NextResponse("Internal Server Error", { status: 500 });
//   }
// }

export async function DELETE(request) {
  try {
    const blogId = request.nextUrl.searchParams.get("blogId");

    await connectMongoDB();
    const deletedBlog = await Blog.findByIdAndDelete(blogId);

    if (!deletedBlog) {
      return new NextResponse("Blog not found", { status: 404 });
    }

    return new NextResponse("Blog deleted successfully", { status: 200 });
  } catch (error) {
    console.log(error);

    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
