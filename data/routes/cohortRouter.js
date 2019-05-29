const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/", async (req, res) => {
  const getdb = await db("cohorts");
  res.status(200).json(getdb);
});

router.post("/", async (req, res) => {
  try {
    const newCohort = await db.insert(req.body).into("cohorts");
    res.status(201).json(newCohort);
  } catch (err) {
    res.status(500).json({ message: "Error 500 status code lul" });
  }
});

module.exports = router;
