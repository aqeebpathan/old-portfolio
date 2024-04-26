import connectMongoDB from "@/app/libs/mongodb";
import Blog from "@/app/models/blogs";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { blogId } = params;

  await connectMongoDB();
  const blog = await Blog.findOne({ _id: blogId });

  return new NextResponse(JSON.stringify(blog));
}
