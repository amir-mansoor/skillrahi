import mongoose from "mongoose";

/**
 * Enhanced Blog Model with comprehensive metadata
 */
const { Schema } = mongoose;

const blogSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    content: { type: String, required: true },

    author: {
      type: String,
      required: true,
    },
    published: { type: String, default: "false" },
    category: {
      type: String,
      enum: [
        "web-development",
        "mobile-development",
        "data-science",
        "ai-ml",
        "devops",
        "design",
        "other",
      ],
      required: true,
    },
    tags: [{ type: String, lowercase: true }],

    difficulty: {
      type: String,
      enum: ["beginner", "intermediate", "advanced"],
      default: "beginner",
    },
  },
  { timestamps: true }
);

const Blog = mongoose.models?.Blog || mongoose.model("Blog", blogSchema);
export default Blog;
