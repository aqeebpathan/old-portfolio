import mongoose, { Schema } from "mongoose";

const contentParagrahs = new mongoose.Schema({
  number: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
});

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: [contentParagrahs],
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    estimatedTime: {
      type: String,
      required: true,
    },
    createdAt: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
export default Blog;
