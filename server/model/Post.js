const mongoose = require("mongoose");
// creating user schema
const PostSchema = new mongoose.Schema(
  {
    // creating object
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    // foreign reference to user table
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    likes: {
      type: Array,
      default: [],
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  // updated at created at will be included
  { timestamps: true }
);

// finaly support to export the schema
module.exports = mongoose.model("Post", PostSchema);
