const express = require("express");
const router = express.Router();
const Contactus = require("../models/contactusModel");

router.post("/", async (req, res) => {
  const { name, email, phone, message } = req.body;
  try {
    const contact = await Contactus.create({ name, email, phone, message });
    res.status(200).json(contact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
