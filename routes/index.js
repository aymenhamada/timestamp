const router = require("express").Router();


router.get("/:date_string", (req, res) => {
    Date.prototype.isValid = function(){
        return this.getTime() === this.getTime();
    }
    let { date_string } = req.params;
    if(!isNaN(+date_string)) date_string = +date_string
    const date = new Date(date_string);
    if (!date.isValid()){
        return res.status(400).json({error: "Invalid Date"});
    }
    return res.status(200).json({unix: date.getTime(), utc: date.toUTCString()})
})


module.exports = router;