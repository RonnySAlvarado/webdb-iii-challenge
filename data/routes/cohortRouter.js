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
    if (newCohort) {
      res.status(201).json(newCohort);
    } else {
      res.status(400).json({ message: "Could not post into database" });
    }
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong with this request (attempt to add post)"
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const getCohort = await db("cohorts")
      .where({ id: req.params.id })
      .first();
    if (getCohort) {
      res.status(200).json(getCohort);
    } else {
      res
        .status(400)
        .json({ message: "Cohort with specified ID does not exist." });
    }
  } catch (err) {
    res.status(500).json({
      message:
        "Something went wrong with this request (attempt to retrieve cohort by ID"
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteCohort = await db("cohorts")
      .where({ id: req.params.id })
      .del();
    if (deleteCohort) {
      res.status(200).json(deleteCohort);
    } else {
      res
        .status(400)
        .json({ message: "Cohort with specified ID does not exist." });
    }
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong with this request (attempt to delete by ID"
    });
  }
});

module.exports = router;
