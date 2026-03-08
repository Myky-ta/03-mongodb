const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");
const { addContactSchema, updateContactSchema, updateFavoriteSchema } = require("../schemas/contactSchemas");
const validateBody = require("../middleware/validateBody");

// CREATE
router.post("/", validateBody(addContactSchema), async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json(contact);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }this.arguments
});

// READ all
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ one
router.get("/:id", async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ error: "Not found" });
    res.json(contact);
  } catch {
    res.status(400).json({ error: "Invalid ID" });
  }
});

// UPDATE (PUT)
router.put("/:id", validateBody(updateContactSchema), async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!contact) return res.status(404).json({ error: "Not found" });
    res.json(contact);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.patch("/:id/favorite", validateBody(updateFavoriteSchema), async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, { favorite: req.body.favorite }, { new: true });
    if (!contact) return res.status(404).json({ error: "Not found" });
    res.json(contact);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

 
router.delete("/:id", async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) return res.status(404).json({ error: "Not found" });
    res.json(contact);  
  } catch {
    res.status(400).json({ error: "Invalid ID" });
  }
});

module.exports = router;
