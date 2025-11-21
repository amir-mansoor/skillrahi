import mongoose, { Schema } from "mongoose";

/**
 * Progress Model - Tracks user learning progress
 */
const ProgressSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    blogId: {
      type: Schema.Types.ObjectId,
      ref: "Blog",
      required: true,
    },
    completed: { type: Boolean, default: false },
    progress: { type: Number, min: 0, max: 100, default: 0 },
    lastAccessedAt: { type: Date, default: Date.now },
    completedAt: Date,
    timeSpent: { type: Number, default: 0 }, // in seconds
    notes: String,
    bookmarked: { type: Boolean, default: false },
    liked: { type: Boolean, default: false },
  },
  { timestamps: true }
);

ProgressSchema.index({ userId: 1, completed: 1 });
ProgressSchema.index({ userId: 1, blogId: 1 });

export default mongoose.models.Progress ||
  mongoose.model("Progress", ProgressSchema);
