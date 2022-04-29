const mongoose = require("mongoose");
// creating user schema
const CommentSchema = new mongoose.Schema(
  {
    // creating object

    // reference to the Users table
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    comment: {
      type: String,
      required: true,
    },
  },
  // updated at created at will be included
  { timestamps: true }
);

// finaly support to export the schema
module.exports = mongoose.model("Comment", CommentSchema);
