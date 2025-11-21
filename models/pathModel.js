import mongoose, { Schema } from "mongoose";

/**
 * Learning Path Model - Organized skill learning paths
 */
const pathSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: String,
    category: String,
    difficulty: {
      type: String,
      enum: ["beginner", "intermediate", "advanced"],
      default: "beginner",
    },
    content: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Path || mongoose.model("Path", pathSchema);
