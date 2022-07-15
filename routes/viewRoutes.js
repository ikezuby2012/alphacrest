const express = require("express");
const { getAbout } = require("../controllers/viewController");

const router = express.Router();

router.get("/about", getAbout);
router.get("/faq");
router.get("/login");
router.get("/signup");

module.exports = router;
