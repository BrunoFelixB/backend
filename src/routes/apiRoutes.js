const express = require ("express");
const router = express.Router();
const controller = require("../controllers/apiController");

router.get("/", controller.home);


router.get("/api/users", controller.listUsers);
//return a list of GitHub users and the link for the next page.


router.get("/api/users/:username/details", controller.details);
// return the details of a GitHub user


router.get("/api/users/:username/repos", controller.repos);
// return a list with all user repositories


module.exports = router;