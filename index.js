const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
require("dotenv").config();

//initialize express
const app = express();

const hbs = exphbs.create({
  defaultLayout: false,
  layoutsDir: __dirname + "/views/layouts/",
  extname: "hbs",
});

app.set("port", process.env.PORT || 1111);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.engine(".hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home.hbs", {
      title: 'Resumme Page'
  });
});

app.post("/contact-me", (req, res) => {
  res.send(req.body);
})

app.listen(app.get("port"), (err) => {
  if (err) console.error(err);
  console.log(`Resumee Server started on port ${app.get("port")}`);
});
