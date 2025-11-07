// app/api/paths/route.js
import { NextResponse } from "next/server";
import Blog from "@/models/blogModel";
import { connectDB } from "@/lib/db";

export async function GET() {
  await connectDB();
  try {
    const projects = await Blog.find({}).select("-content");
    return NextResponse.json(projects);
  } catch (err) {}
}
