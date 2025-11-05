// app/api/paths/route.js
import { NextResponse } from "next/server";
import Path from "@/models/pathModel";
import { connectDB } from "@/lib/db";

export async function GET() {
  connectDB();
  try {
    const paths = await Path.find({}).select("-content");
    return NextResponse.json(paths);
  } catch (error) {
    console.log("GET PATH ERROR:", error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}
