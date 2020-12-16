const express = require("express");
const router = express();

const authRoutes = require("./auth.routes");
const postsRoutes = require("./posts.routes");

router.use("/posts", postsRoutes);
router.use("/auth", authRoutes);

module.exports = router;
