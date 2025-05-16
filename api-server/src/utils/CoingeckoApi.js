import axios from "axios"
import { COINGECKO_BASEURL } from "../constants.js"
import CryptoStat from "../models/cryptoStat.model.js"

const storeCryptoStats = async (cryptoIds = ["bitcoin", "ethereum", "matic-network"]) => {
    try {
        const params = {
            vs_currencies: 'usd',
            include_market_cap: true,
            include_24hr_change: true,
            ids: cryptoIds.join(','),
            x_cg_demo_api_key: process.env.COINGECKO_API_KEY
        }
        const response = await axios.get(COINGECKO_BASEURL, { params })
        console.log(response.data)

        for (const cryptoId of cryptoIds) {
            const data = response.data[cryptoId]
            if (data) {
                const newstats = new CryptoStat({
                    coin: cryptoId,
                    price: data.usd,
                    marketCap: data.usd_market_cap,
                    change24h: data.usd_24h_change,
                    fetchedAt: new Date()
                });
                await newstats.save();
            }
        }
    } catch (error) {
        console.log("Error fetching and saving crypto prices", error)
    }
}

export default storeCryptoStats
