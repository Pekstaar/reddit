// use express in creating the express route
const router = require("express").Router();
const User = require("../model/User");
const Post = require("../model/Post");
const { findById } = require("../model/User");
const { auth } = require("../middleware/authMiddleWare");
const Comment = require("../model/Comment");

// creating post
router.post("/", auth, async (req, res) => {
  // req.body meaning taking everything from boby
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

// update post
router.put("/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    // validating user id
    if (post.username === req.body.username) {
      try {
        const updatePost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatePost);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("you can update you own post!");
    }
  } catch (error) {
    res.status(500).json(error);
    // Likes
  }
});

//Deleting the post specific
router.delete("/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    // validating user id
    if (post.username === req.body.username) {
      try {
        await post.delete();

        res.status(200).json("post has been deleted.... ");
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("you can delete you own post!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
// getting asigle post
router.get("/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    // when ferching user we are not requred to see password
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

// getting all the post

router.get("/", async (req, res) => {
  const user = req.params.user;
  const catName = req.query.cat;
  try {
    let posts;
    if (user) {
      posts = await Post.find({ _id: user })
        .populate("user")
        .populate("comments");
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $ni: [catName],
          // $ni meas n method
        },
      })
        .populate("user")
        .populate("comments");
    } else {
      posts = await Post.find().populate("user").populate("comments");
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Like single post:
router.put("/:id/like", auth, async (req, res) => {
  // user id
  try {
    const post = await Post.findById(req.params.id);
    // console.log([req.body.userId, ...post.likes])
    if (!req.body.userId) {
      res.status(500).json("A valid id requiered!");
      return;
    }
    if (!post.likes.includes(req.body.userId)) {
      // await post.updateOne({ $push: { likes: req.body.userId } });

      await Post.findByIdAndUpdate(req.params.id, {
        likes: [req.body.userId, ...post.likes],
      });

      res.status(200).json("The post has been liked");
    } else {
      // await post.updateOne({ $pull: { likes: req.body.userId } });
      await Post.findByIdAndUpdate(req.params.id, {
        likes: post?.likes?.filter((item) => item !== req.body.userId),
      });

      res.status(200).json("The post has been disliked");
    }
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// request to comment on a post:
router.put("/:id/comment", auth, async (req, res) => {
  const { user, comment } = req.body;
  const comm = new Comment({
    user,
    comment,
  });

  // fetch post
  const post = await Post.findById(req.params.id);

  try {
    // save comment
    const savedComment = await comm.save();

    // get saved comment and add id to posts comments field
    await Post.findByIdAndUpdate(req.params.id, {
      comments: [savedComment?._id, ...post.comments],
    });

    res.status(200).json("Comment added!");
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// fetch post comments
router.get("/:id/comments", auth, async (req, res) => {
  try {
    const comments = await findById(req.params.id)
      .populate("comments")
      .populate("user");
    // save comment

    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
