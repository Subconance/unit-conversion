const express = require("express");
const routes = require("./routes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Unit Conversion API");
});

app.use("/api", routes);

app.listen(PORT, () => {
  console.log("Unit Conversion API started on port: " + PORT);
});
