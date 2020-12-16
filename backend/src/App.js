const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const morgan = require("morgan");

const routes = require("./routes");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "tmp", "uploads"))
);

app.use(routes);

app.listen(process.env.PORT || 8080, () => {
  console.log("MESSAGE::::::: server is running");
});
