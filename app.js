const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("pages/home", {
    meta: {
      data: {
        title: "Floema",
        description: "metadata description",
      },
    },
  });
});
app.get("/about", (req, res) => {
  res.render("pages/about", {
    meta: {
      data: {
        title: "Floema",
        description: "metadata description",
      },
    },
  });
});
app.get("/detail/:id", (req, res) => {
  res.render("pages/detail", {
    meta: {
      data: {
        title: "Floema",
        description: "metadata description",
      },
    },
  });
});
app.get("/collections", (req, res) => {
  res.render("pages/collections", {
    meta: {
      data: {
        title: "Floema",
        description: "metadata description",
      },
    },
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
