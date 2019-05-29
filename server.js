const express = require("express");
const helmet = require("helmet");

const server = express();

const cohortRouter = require("./data/routes/cohortRouter.js");
// const studentRouter = require("./data/routes/studentRouter.js");

server.use(express.json());
server.use(helmet());

server.use("/api/cohorts", cohortRouter);
// server.use("/api/students", studentRouter);

module.exports = server;
