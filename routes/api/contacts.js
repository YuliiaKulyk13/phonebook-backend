const express = require("express");

const {
  getAllCtrl,
  addContactCtrl,
} = require("../../controllers/contactsControllers");

const contactValidator = require("../../middlewars/validation/contactValidation");

const router = express.Router();

router.get("/", getAllCtrl);

router.post("/", contactValidator, addContactCtrl);

router.delete("/:contactId");

router.put("/:contactId");

module.exports = router;
