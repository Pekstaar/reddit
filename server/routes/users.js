// use express in creating the express route
const router = require("express").Router();
const User = require("../model/User");
const Post = require("../model/Post");
const bcrypt = require("bcrypt");

// update
router.put("/:id", async (req, res) => {
  // good to use trycatch error to track the error
  if (req.body.userId === req.params.id) {
    // params meaning taking value from put id
    // enccrpting the password
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          // setting all the user
          $set: req.body,
        },
        { new: true }
      );
      // if everthing isokey send the
      res.status(200).json(updateUser);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(401).json("you can only update you account !");
  }
});
// Delete
router.delete("/:id", async (req, res) => {
  // good to use trycatch error to track the error
  if (req.body.userId === req.params.id) {
    // params meaning taking value from put id
    try {
      const user = await User.findByIdAndDelete(req.params.id);

      try {
        // deleting post
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        // if everthing isokey send the
        res.status(200).json("user has been  deleted");
      } catch (error) {
        res.status(500).json(error);
      }
    } catch (error) {
      res.status(404).json("user not found !");
    }
  } else {
    res.status(401).json("you can only delete you account !");
  }
});

// getting one user
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    // when ferching user we are not requred to see password
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
