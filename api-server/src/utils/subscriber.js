import { connect, StringCodec } from "nats"
import storeCryptoStats from "./CoingeckoApi.js"

const NATS_URL = "nats://localhost:4222" // bad

const startSubscriber = async () => {
  try {
    const nc = await connect({ servers: NATS_URL })
    console.log("Server connected to nats")

    const sc = StringCodec()

    const sub = nc.subscribe("crypto.update")
    console.log("Subscribed to crypto.update")

    for await (const msg of sub) {
      try {
        const decoded = sc.decode(msg.data);
        console.log("Received message:", decoded)
        await storeCryptoStats();
        console.log("Function executed successfully")
      } catch (err) {
        console.error("Error: ", err.message)
      }
    }
  } catch (err) {
    console.error("Failed to connect or subscribe to NATS:", err.message)
    process.exit(1)
  }
}

export default startSubscriber;
