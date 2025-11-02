import mongoose, { Schema } from "mongoose";

const LessonSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    difficulty: String,
    content: String,
  },
  { timestamps: true }
);

export default mongoose.models.Lesson || mongoose.model("Lesson", LessonSchema);

