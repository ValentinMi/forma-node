const express = require("express");
const colors = require("colors");
const path = require("path");
const logger = require("morgan");

const app = express();

const userRouter = require("./routes/users.routes");

app.use(logger("dev"));
app.use(express.static(path.join(__dirname + "/assets")));
app.use("/users", userRouter);

app.get("/", (req, res, next) => {
  res.send("ok");
  next();
});

app.listen(8080, () => {
  console.log("Server démarré avec succés sur le port 8080".green);
});
