import mongoose from "mongoose";

/**
 * Enhanced View Model - Tracks detailed view information
 */
const viewSchema = new mongoose.Schema(
  {
    userAgent: String,
    ipAddress: String,
    device: {
      type: { type: String, enum: ["mobile", "desktop", "tablet"] },
      os: String,
      browser: String,
    },
    referrer: String,
    timeSpent: { type: Number, default: 0 }, // in seconds
    createdAt: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

export default mongoose.models.View || mongoose.model("View", viewSchema);
