import CryptoStat from "../models/cryptoStat.model.js"
import ApiError from "../utils/ApiError.js"
import ApiResponse from "../utils/ApiResponse.js"

const getStats = async (req, res) => {
    const { id } = req.params

    if (!id) {
        throw new ApiError(400, "Id parameter is missing")
    }

    const cryptoDetails = await CryptoStat.findOne({ coin: id });

    if (!cryptoDetails) {
        throw new ApiError(404, "CryptoCurrency not found")
    }

    return res
        .status(200)
        .json({
                price: cryptoDetails.price,
                marketCap: cryptoDetails.marketCap,
                change24h: cryptoDetails.change24h
            })
}

const getDeviation = async (req, res) => {
    const { id } = req.params

    if (!id) {
        throw new ApiError(400, "Id parameter is missing")
    }

    try {
        const records = await CryptoStat.find({ coin: id })
            .sort(
                {
                    fetchedAt: -1
                }
            )
            .limit(100)

        if (records.length === 0) {
            throw new ApiError(404, "No records found for the specified cryptoCurrency")
        }

        const prices = records.map(record => record.price);

        const mean = prices.reduce((acc, price) => acc + price, 0) / prices.length;

        const variance = prices.reduce((acc, price) => acc + Math.pow(price - mean, 2), 0) / prices.length;

        const standardDeviation = Math.sqrt(variance);

        return res
            .status(200)
            .json({
                deviation: standardDeviation.toFixed(2)
            })
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error")
    }
}

export { getStats, getDeviation }