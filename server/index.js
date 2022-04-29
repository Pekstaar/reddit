const express = require("express");
const dotEnv = require("dotenv");
const app = express();
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const CateRoute = require("./routes/Comment");
const cors = require("cors");
dotEnv.config();
// importing
require(`./db/connect`);
app.use(cors());
app.use(express.json());

console.log("welcome");

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/comment", CateRoute);

const port = 5000;
app.listen(port, console.log(`server is listening port ${port}....`));
