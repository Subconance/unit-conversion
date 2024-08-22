const express = require('express');
const {convert, units} = require("../controllers")

const router = express.Router();

router.get("/", (req, res) => {
    return res.status(200).json({
        sucess: true,
        message: "Unit Conversion API"
    });
});

router.post("/convert", convert);
router.get("/units", units)


module.exports = router;