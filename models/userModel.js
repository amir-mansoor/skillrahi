import mongoose, { Schema } from "mongoose";

/**
 * Enhanced User Model with authentication and subscription
 */
const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true },
    name: { type: String, required: true },
    password: { type: String, required: true }, // hashed
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    status: {
      type: String,
      enum: ["active", "inactive", "banned"],
      default: "active",
    },
  },
  { timestamps: true }
);

UserSchema.index({ email: 1, username: 1 });
UserSchema.index({ status: 1 });

export default mongoose.models.User || mongoose.model("User", UserSchema);
