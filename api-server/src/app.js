import express from "express"
import statsRouter from "./routes/crypto.routes.js"

const app = express()

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({limit: "16kb", extended: true}))

app.use("", statsRouter) // bad

export default app