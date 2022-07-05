import 'dotenv/config'
import express from "express"
import fs from "fs"
import cors from "cors"
import rateLimit from "express-rate-limit"

const port = process.env.PORT || 5000
const app = express()

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
})

const api_key = process.env.API_KEY;

app.use(express.static("public"))
app.use(limiter)
app.use(cors())

app.get("/", (req, res) => {
    res.send(`<a href="https://github.com/skillzl/image-api">github.com/skillzl/image-api</a>`)
})

app.get("/anal", (req, res) => {
    const key = req.query.key
    const result = {}

    result.code = 200

    const imageList = fs.readdirSync("./public/anal")
    const randomImage = imageList[Math.floor(Math.random() * imageList.length)]

    if (!imageList.length) {
        result.code = 404
        result.url = `error: no images available`
    } else {
        result.url = `127.0.0.1:5000/anal/${randomImage}`
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

app.get("/gif", (req, res) => {
    const key = req.query.key
    const result = {}

    result.code = 200

    const imageList = fs.readdirSync("./public/gif")
    const randomImage = imageList[Math.floor(Math.random() * imageList.length)]

    if (!imageList.length) {
        result.code = 404
        result.url = `error: no images available`
    } else {
        result.url = `127.0.0.1:5000/gif/${randomImage}`
        result.key = key;
        res.header("Content-type", "application/json; charset=utf-8")
    }
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

app.get("/boobs", (req, res) => {
    const key = req.query.key
    const result = {}

    result.code = 200

    const imageList = fs.readdirSync("./public/boobs")
    const randomImage = imageList[Math.floor(Math.random() * imageList.length)]

    if (!imageList.length) {
        result.code = 404
        result.url = `error: no images available`
    } else {
        result.url = `127.0.0.1:5000/boobs/${randomImage}`
        result.key = key;
        res.header("Content-type", "application/json; charset=utf-8")
    }
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

app.get("/pussy", (req, res) => {
    const key = req.query.key
    const result = {}

    result.code = 200

    const imageList = fs.readdirSync("./public/pussy")
    const randomImage = imageList[Math.floor(Math.random() * imageList.length)]

    if (!imageList.length) {
        result.code = 404
        result.url = `error: no images available`
    } else {
        result.url = `127.0.0.1:5000/pussy/${randomImage}`
        result.key = key;
        res.header("Content-type", "application/json; charset=utf-8")
    }
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

app.listen(port, "0.0.0.0", function () {
    console.log(`Server listening on port ${port}\n`)
})