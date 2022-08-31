import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
// import mongoose from "mongoose";

// const postSchema = mongoose.Schema({
//   title: String,
//   message: String,
//   creator: String,
//   tags: [String],
//   selectedFile: String,
//   likeCount: {
//     type: Number,
//     dafault: 0,
//   },
//   createdAt: {
//     type: Date,
//     dafault: new Date(),
//   },
// });
// var PostMessage = mongoose.model("PostMessage", postSchema);
// export default PostMessage;
