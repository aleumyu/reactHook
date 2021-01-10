const express = require("express");
const router = express.Router();
const db = require("./helper");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/api/v1/items", async (req, res, next) => {
  let items;
  //api/v1/items?is_fridge===1) then query params
  try {
    const items = await db("SELECT * FROM items ORDER BY date ASC;");
    res.send(items.data);
  } catch (error) {
    res.status(404).send(itemResult.error);
  }
  // res.json(items.data);

  // db("SELECT * FROM items ORDER BY date ASC;").then((results) => {
  //   if (results.error) {
  //   }
  //   console.log("results: " + JSON.stringify(results.data));
  //   res.send(results.data);
  // });
});

module.exports = router;
