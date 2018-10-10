const router = require("express").Router();
const shutterstock = require("shutterstock");
// routes
router.get("/shutterstock/:color", function (req, res) {

    var api = shutterstock.v2({
        clientId: "e0895-f3fff-50725-48c4b-ee406-c57c5",
        clientSecret: "d1172-b4866-f0046-3446a-d0282-c188f"
    });

    api.image.search({ color: req.params.color }, function (err, data) {
        if (err) throw err;
        return res.json(data);
    });

})

module.exports = router;