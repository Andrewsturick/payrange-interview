const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors");
const path = require("path")

const DATA_SOURCE_PATH = "./dataSources/ListItems.json";


const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/machines", (req, res, next) => {
    const machines = require("./dataSources/ListItems.json");

    res.json({success: true, machines: machines.devices});
});

const PORT = 3001;

app.listen(PORT, () => console.log("listening on port " + PORT));