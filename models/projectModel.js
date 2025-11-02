import mongoose, { Schema } from "mongoose";

const ProjectSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    difficulty: String,
    content: String,
  },
  { timestamps: true }
);

export default mongoose.models.Project || mongoose.model("Project", ProjectSchema);

