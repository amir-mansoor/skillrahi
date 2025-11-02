import mongoose, { Schema } from "mongoose";

const ProgressSchema = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
    item_id: { type: Schema.Types.ObjectId, required: true },
    type: { type: String, enum: ["project", "lesson"], required: true },
    status: { type: String, enum: ["started", "completed"], required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Progress || mongoose.model("Progress", ProgressSchema);

