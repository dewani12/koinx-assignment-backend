import dotenv from "dotenv"
import connectDB from "./db/index.js"
import app from "./app.js"
import startSubscriber from "./utils/subscriber.js"

dotenv.config({
    path: "./.env"
})

connectDB()
.then(async () => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server running on port ${process.env.PORT}`) 
    })
    await startSubscriber()
})
.catch((error) => {
    console.log("MongoDb connection failed!", error)
})