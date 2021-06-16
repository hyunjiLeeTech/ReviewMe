const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;

const dataModule = require("./modules/serverDataModule");

const app = express();

app.use(express.static(path.resolve(__dirname, "../frontend/build")));

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  });
}

dataModule.initialize().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
});
