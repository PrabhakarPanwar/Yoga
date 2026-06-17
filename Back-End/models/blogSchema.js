import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title:      { type: String, required: true, trim: true },
    slug:       { type: String, unique: true },
    content:    { type: String, required: true },
    excerpt:    { type: String },
    coverImage: { type: String, default: "" },
    tags:       { type: [String], default: [] },
    author:     { type: mongoose.Schema.Types.ObjectId, ref: "yogauser", required: true },
    status:     { type: String, enum: ["draft", "published"], default: "draft" },
    views:      { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("blog", blogSchema);