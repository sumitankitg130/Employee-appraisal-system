const express = require("express");
const router = express.Router();

const detail = require("../models/details");

router.get("/details", (req, res, next) => {
    detail.find(function (err, details) {
        res.json(details);
    })

});

router.post("/detail", (req, res, next) => {
    let newdetail = new detail({
        emp_id: req.body.emp_id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        mark1: req.body.mark1,
        mark2: req.body.mark2,
        mark3: req.body.mark3,
        mark4: req.body.mark4,
        mark5: req.body.mark5
    });

    newdetail.save({ emp_id: req.body.emp_id }, (err, detail) => {
        if (err) {
            res.json({ msg: "Failed to add detail!!!" });
        }
        else {
            res.json({ msg: "Detail added successfully" });
        }
    });



});

router.delete("/detail/:id", (req, res, next) => {
    detail.remove({ _id: req.params.id }, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });

});
router.delete("/detail/update/:emp_id",(req,res,next)=>{
    detail.remove({ emp_id: req.params.emp_id }, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
});

module.exports = router;