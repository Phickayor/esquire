var http = require("http");
var express = require("express")
var bodyParser = require("body-parser");
var MongoClient = require("mongodb").MongoClient;
var cors = require("cors");
var app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
    cors({
        origin: "http://localhost:3000", // restrict calls to those this address
        methods: ["POST"] // only allow POST requests
    })
);

// parse application/json
app.use(bodyParser.json());
app.post("/booking", function (req, res) {
    console.log(req.body.name)
})
app.listen(8080, () => {
    console.log(`Server listening on 8080`);
});