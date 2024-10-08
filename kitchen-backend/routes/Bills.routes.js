const express = require("express");
const router = express.Router();
const { createBill } = require("../controllers/Bills.controllers"); // Ensure this is spelled correctly

router.post("/create", createBill); // Ensure the function name matches

module.exports = router; // Corrected 'modules' to 'module'