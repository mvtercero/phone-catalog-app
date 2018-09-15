var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json({
    "phones": [
      { id: 1, title: "iPhone 7" },
      { id: 2, title: "Samsung Galaxy" }
    ]
  });
});

module.exports = router;
