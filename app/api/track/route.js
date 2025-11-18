import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import View from "@/models/viewModel";
import { parseUserAgent } from "@/lib/device";

export async function POST(req) {
  try {
    await connectDB();

    const { timeSpent = 0 } = await req.json();
    const userAgent = req.headers.get("user-agent") || "unknown";

    const ipAddress = req.headers.get("x-forwarded-for") || "unknown";
    const referrer = req.headers.get("referer") || "direct";

    // Parse device info
    const device = parseUserAgent(userAgent);

    await View.create({
      userAgent,
      ipAddress,
      referrer,
      timeSpent,
      device,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error tracking view:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
