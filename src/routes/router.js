const router = require("express").Router();
const modelSchema = require("../models/model");
const express = require('express');

/* This is the router file. You can add your own routes here. I have added a few basic routes here for your understanding.*/

// GET
// homepage
router.get("/", (req, res) => {
  res.type("text/plain");
  res.send("🚀 Welcome young padwan! add data via postman and the use /getData to retrieve your data!");
});

// getData
router.get("/getData", async (req, res) => {
  let data = await modelSchema.find();
  res.type("text/plain");
  res.send(`🛹 DATA: ${data}`);
});

// POST
// addData
router.post("/addData", express.json({type: '*/*'}), async (req, res) => {
  const data = req.body;
  const newData = new modelSchema({
    name: data.name,
    email: data.email,
    phoneNumber: data.phoneNumber
  });
  await newData.save();
  res.send("🛹 DATA ADDED!");
});

module.exports = router;
