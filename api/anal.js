const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    const key = req.query.key
    const result = {}

    result.code = 200

    const imageList = fs.readdirSync("../public/anal")
    const randomImage = imageList[Math.floor(Math.random() * imageList.length)]

    if (!imageList.length) {
        result.code = 404
        result.url = `error: no images available`
    } else {
        result.url = `https://api.skillzl.me/anal/${randomImage}`
        result.key = key;
        res.header("Content-type", "application/json; charset=utf-8")
    }
    res.header("Content-type", "application/json; charset=utf-8")
    if (api_key.includes(key)) {
        res.send(JSON.stringify(result, null, 2))
        console.log(result)
    } else {
        const result = {}
        result.code = 403
        result.message = "error: invalid api key, try again"
        res.send(JSON.stringify(result, null, 2))
    }
  });

module.exports = router;