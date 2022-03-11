/*const express = require("express");
const controller = require("../controllers/userController");

const router = express.Router();

// Configure routes.
console.log("hai");
router.get("/register", controller.getRegisterView);


module.exports = router;*/


const express = require("express");
const controller = require("../controllers/userController");

const router = express.Router();

// Configure routes.

router.get("/register", controller.getRegisterView);

router.post("/register", controller.register)
router.get("/login", controller.getLoginView)
router.post("/login", controller.login)

module.exports = router;