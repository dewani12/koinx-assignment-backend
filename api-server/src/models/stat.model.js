import mongoose, { Schema } from "mongoose";

const statSchema = new Schema({
  coin: {
    type: String,
    enum: ["bitcoin", "ethereum", "matic-network"],
    required: true,
    index: true,
  },
  price: {
    type: Number,
    required: true,
  },
  marketCap: {
    type: Number,
    required: true,
  },
  change24h: {
    type: Number,
    required: true,
  },
  fetchedAt: {
    type: Date,
    default: Date.now,
    index: true,
  }
})

const Stat = mongoose.model("Stat", statSchema)

export default Stat
