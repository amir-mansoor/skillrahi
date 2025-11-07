// app/api/paths/route.js
import { NextResponse } from "next/server";
import Path from "@/models/pathModel";
import { connectDB } from "@/lib/db";

export async function GET(req, { params }) {
  const { id } = await params;

  await connectDB();
  try {
    const path = await Path.findById(id);

    if (!path) {
      return NextResponse.json({ message: "Path not found" }, { status: 404 });
    }
    return NextResponse.json(path, { status: 200 });
  } catch (error) {
    console.log("GET PATH ERROR:", error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}
