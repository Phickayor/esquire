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

app.post("/booking", function (req, res) {
    var info = {
        rname: req.body.name,
        arrivalDate: req.body.arrivalDate,
        depatureDate: req.body.depatureDate,
        guestNumber: req.body.guestNumber,
        price: req.body.price
    }
    // res.json({ name: info.rname, price: info.price })

    MongoClient.connect(url, function (err, db) {
        if (err) throw err
        console.log("Connection succesful")
        var dbo = db.db("esquire");

        dbo.collection("reservation").find({}).toArray(function (err, result) {
            if (err) throw err;
            //Adding reservation to db when not booked already
            const welcome = new Date(info.arrivalDate)
            const goodbye = new Date(info.depatureDate)
            for (var i = 0; i < result.length; i++) {
                const recordedArrivalDate = new Date(result[i].arrivalDate)
                const recordedDepatureDate = new Date(result[i].depatureDate)
                if (welcome >= recordedArrivalDate && goodbye <= recordedDepatureDate && result[i].rname === info.rname) {
                    console.log("date taken")
                }
                else {
                    dbo.collection("reservation").insertOne(info, function (err, res) {
                        if (err) throw err;
                        console.log("1 document inserted");
                        db.close();
                    })
                    res.json({ message: "room available moving to payment " })

                    break
                }
            }
        });
    })
})
app.listen(8080, () => {
    console.log(`Server listening on 8080`);
});