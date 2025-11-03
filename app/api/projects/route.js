// app/api/paths/route.js
import { NextResponse } from "next/server";
import Project from "@/models/projectModel";
import { connectDB } from "@/lib/db";

export async function GET() {
  connectDB();
  try {
    const projects = await Project.find({}).select("-content");
    return NextResponse.json(projects);
  } catch (err) {}
}
