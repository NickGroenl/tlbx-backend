const express = require("express");
const { body, header } = require("express-validator");
const router = express.Router();
const files = require("../controllers/files");

router.post("/files/data/select", files.getFileByName
);
router.get("/files/data", files.getAllFiles);

module.exports = router;