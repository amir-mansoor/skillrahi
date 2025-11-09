import mongoose from "mongoose";

const ViewSchema = new mongoose.Schema(
  {
    createdAt: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

export default mongoose.models.View || mongoose.model("View", ViewSchema);
