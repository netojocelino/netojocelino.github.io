"use strict";
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
app.set("port", port);

const server = http.createServer(app);
const router = express.Router();

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Jocelino Alves",
        version: "0.0.1"
    })
});

app.use('/', route)