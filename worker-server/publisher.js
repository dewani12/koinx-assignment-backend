import { connect, StringCodec } from "nats"

const NATS_URL = "nats://localhost:4222"

const startPublisher = async () => {
  const nc = await connect({ servers: NATS_URL });
  console.log("Worker connected to nats")

  const sc = StringCodec();

  setInterval(() => {
    const message = { trigger: "update" }
    nc.publish("crypto.update", sc.encode(JSON.stringify(message)));
    console.log("Published");
  }, 5000)
};

startPublisher().catch(console.error);
