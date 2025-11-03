// simple: models/Blog.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const blogSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true }, // e.g. generated from title
    content: { type: String, required: true },
    author: { type: String }, // simple string author
    tags: [{ type: String }],
  },
  { timestamps: true } // createdAt, updatedAt
);

// export model (prevents model overwrite on hot-reload)
export default mongoose.models.Blog || mongoose.model("Blog", blogSchema);
