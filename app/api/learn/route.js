// app/api/paths/route.js
import { NextResponse } from "next/server";
import Path from "@/models/pathModel";
import { connectDB } from "@/lib/db";

export async function GET() {
  connectDB();
  try {
    const paths = await Path.find({});
    return NextResponse.json(paths);
  } catch (err) {}
}
