const express = require("express");
const app = express();


app.set("view engine", "ejs");
app.set("views", "views");
// This will tell express that we want to compile dynamic templates with the pug engine and where to find these template
// app.set("view engine", "pug");
// app.set("views", "views");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
const adminData = require("./routes/admin")
const shopRoute = require("./routes/shop");
const path = require("path");


const rootDir = require("./util/path")


app.use(express.static(path.join(__dirname, "public")));

// Filtering paths
app.use("/admin", adminData.routes);
app.use(shopRoute);

// catch all routes
app.use((req, res, next) => {
    res.status(404).render("404", {pageTitle : "Page Not Found!"});
})

app.listen(3000);