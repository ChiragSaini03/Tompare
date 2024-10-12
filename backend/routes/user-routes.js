const express = require('express');
const getAppUser = require("../controllers/user-controller")


const router = express.Router();

router.get("/", getAppUser);

export default router;