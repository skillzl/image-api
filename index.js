import 'dotenv/config'
import express from "express"
import fs from "fs"
import cors from "cors"
import rateLimit from "express-rate-limit"
import path from "path"
import { fileURLToPath } from 'url';

const port = process.env.PORT || 8080
const app = express()

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
})

const api_key = process.env.API_KEY;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static("public"))
app.use(limiter)
app.use(cors())

app.get("/", (req, res) => {
    res.redirect('https://github.com/skillzl/image-api');
})

app.get("/cat", (req, res) => {
    const key = req.query.key
    const result = {}

    result.code = 200

    const imageList = fs.readdirSync(path.join(__dirname, ".", "public", "cat"))
    const randomImage = imageList[Math.floor(Math.random() * imageList.length)]

    if (!imageList.length) {
        result.code = 404
        result.url = `error: no images available`
    } else {
        result.url = `https://api.skillzl.dev/cat/${randomImage}`
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
})

app.get("/dog", (req, res) => {
    const key = req.query.key
    const result = {}

    result.code = 200

    const imageList = fs.readdirSync(path.join(__dirname, ".", "public", "dog"))
    const randomImage = imageList[Math.floor(Math.random() * imageList.length)]

    if (!imageList.length) {
        result.code = 404
        result.url = `error: no images available`
    } else {
        result.url = `https://api.skillzl.dev/dog/${randomImage}`
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
})

app.get("/test", (req, res) => {
    const result = {}

    result.code = 200

    const imageList = fs.readdirSync(path.join(__dirname, ".", "public", "test"))
    const randomImage = imageList[Math.floor(Math.random() * imageList.length)]

    if (!imageList.length) {
        result.code = 404
        result.url = `error: no images available`
    } else {
        result.url = `https://api.skillzl.dev/test/${randomImage}`
        res.header("Content-type", "application/json; charset=utf-8")
    }
        res.send(JSON.stringify(result, null, 2))
        console.log(result)
})

app.listen(port, "0.0.0.0", function () {
    console.log(`Server listening on port ${port}\n`)
});
