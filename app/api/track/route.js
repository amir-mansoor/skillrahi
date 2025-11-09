import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import View from "@/models/viewModel";

export async function POST() {
  try {
    await connectDB();
    await View.create({}); // create a new visit entry
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error tracking view:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
