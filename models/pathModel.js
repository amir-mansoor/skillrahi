import mongoose, { Schema } from "mongoose";

const pathSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    difficulty: String,
    content: String,
  },
  { timestamps: true }
);

export default mongoose.models.Path || mongoose.model("Path", pathSchema);
