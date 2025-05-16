import { Router } from "express"
import { getStats, getDeviation } from "../controllers/crypto.controller.js"

const router = Router()

router.route("/stats/:id").get(getStats) 
router.route("/deviation/:id").get(getDeviation)

export default router