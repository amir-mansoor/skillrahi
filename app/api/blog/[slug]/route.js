// app/api/paths/route.js
import { NextResponse } from "next/server";
import Blog from "@/models/blogModel";
import { connectDB } from "@/lib/db";

export async function GET(req, { params }) {
  const { slug } = await params;

  await connectDB();
  try {
    const blog = await Blog.findOne({ slug });

    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    console.log("GET PATH ERROR:", error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}
