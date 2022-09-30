const express = require("express");
const { body, header } = require("express-validator");
const router = express.Router();
const  files = require("../controllers/files");

router.get("/files/data", files.getAllFiles);
router.post("/files/data/select", 
    body("name").isString().withMessage("Name is invalid"),
    files.getFileByName
);

module.exports = router;