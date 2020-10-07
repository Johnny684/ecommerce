const express    = require("express"),
      bodyParser = require("body-parser"),
      app        = express();

app.use(express.static("assets"));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

app.get("/", (req,res,next)=>{
    res.render("index");
});