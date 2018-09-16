const express = require("express");
const mongoose = require("mongoose");
const app = express();

// API routes separated into files, and imported here
const languages = require("./languages");
mongoose.connect("mongodb://localhost:27017/local", {
	useNewUrlParser: true
});

app.use(express.json());
// app.use(express.urlencoded());
app.use("/api/languages", languages);
app.listen(3000);

console.log("api started");
