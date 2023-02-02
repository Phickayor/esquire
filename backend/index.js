var http = require("http");
var express = require("express")
var bodyParser = require("body-parser");
var MongoClient = require("mongodb").MongoClient;
var cors = require("cors");
require("dotenv").config();
var app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(
    cors({
        origin: "http://localhost:3000", // restrict calls to those this address
        methods: ["POST"] // only allow POST requests
    })
);
var url = `mongodb+srv://esquire:${process.env.DB_PASSWORD}@cluster0.ygqcnmi.mongodb.net`;

app.post("/checkbooking", function (req, res) {
    // res.setHeader(200, { 'Content-Type': 'text/plain' });
    // res.set('X-Powered-By', 'Esquire Booking')
    var info = {
        rname: req.body.name,
        arrivalDate: req.body.arrivalDate,
        depatureDate: req.body.depatureDate,
    }

    //Creating mongodb connection

    MongoClient.connect(url, function (err, db) {

        if (err) throw err
        var dbo = db.db("esquire");

        //Checking through reservation collection
        dbo.collection("reservation").find({}).toArray(function (err, result) {
            if (err) throw err;

            const welcome = new Date(info.arrivalDate)
            const goodbye = new Date(info.depatureDate)
            for (var i = 0; i < result.length; i++) {
                const recordedArrivalDate = new Date(result[i].arrivalDate)
                const recordedDepatureDate = new Date(result[i].depatureDate)
                //Checking if reservation is reserved already
                if (welcome >= recordedArrivalDate && goodbye <= recordedDepatureDate && result[i].rname === info.rname) {
                    console.log("date taken")
                    res.json({ message: "reserved" })

                }
                //Checking if reservation is available
                else {
                    res.json({ message: "available" })
                    break
                }
            }
        });
    })
})

app.post("/booking", function (req, res) {

    var newinfo = {
        rname: req.body.sroomname,
        arrivalDate: req.body.sarrivalDate,
        depatureDate: req.body.sdepatureDate,
        guestNumber: req.body.sguestNumber,
        price: req.body.sprice,
        mail: req.semail,
        ref: req.sref
    }

    MongoClient.connect(url, function (err, db) {
        if (err) throw err
        var dbo = db.db("esquire");

        dbo.collection("reservation").insertOne(newinfo, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        })
    })
})
app.listen(8080, () => {
    console.log(`Server listening on 8080`);
});