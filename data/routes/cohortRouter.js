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
        .status(404)
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
        .status(404)
        .json({ message: "Cohort with specified ID does not exist." });
    }
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong with this request (attempt to delete by ID"
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updateCohort = await db("cohorts")
      .where({ id: req.params.id })
      .update(req.body);
    if (updateCohort) {
      res.status(200).json(updateCohort);
    } else {
      res
        .status(404)
        .json({ message: "Cohort with specified ID does not exist. " });
    }
  } catch (err) {
    res.status(500).json({
      message:
        "Something went wrong with this request (attempt to update information)"
    });
  }
});

router.get("/:id/students", async (req, res) => {
  try {
    const getStudents = await db("students").where({
      cohort_id: req.params.id
    });
    if (getStudents) {
      res.status(200).json(getStudents);
    } else {
      res
        .status(404)
        .json({ message: "Cohort with specified ID does not exist." });
    }
  } catch (err) {
    res.status(500).json({ message: "Something went wrong with this request" });
  }
});

module.exports = router;
