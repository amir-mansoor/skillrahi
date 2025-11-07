// app/api/paths/route.js
import { NextResponse } from "next/server";
import Project from "@/models/projectModel";
import { connectDB } from "@/lib/db";

export async function GET(req, { params }) {
  const { id } = await params;

  await connectDB();
  try {
    const project = await Project.findById(id);

    if (!project) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    console.log("GET PATH ERROR:", error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}
