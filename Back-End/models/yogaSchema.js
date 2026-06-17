import mongoose from "mongoose";

const yogaSchema = new mongoose.Schema(
  {
    name:      { type: String, required: true, trim: true },
    email:     { type: String, required: true, unique: true, lowercase: true },
    pwd:       { type: String, required: true },
    role:      { type: String, enum: ["user", "admin"], default: "user" },
    lastLogin: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.model("yogauser", yogaSchema);