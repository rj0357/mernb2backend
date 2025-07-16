import { createClient } from "redis";

const redisClient = createClient({
  url: "redis://default:vDSFipmcNmKaJzewfhX9oV9QIZqHVBNu@redis-15825.c212.ap-south-1-1.ec2.redns.redis-cloud.com:15825"
});

redisClient.on("error", (err) => console.error("❌ Redis Error:", err));
redisClient.on("connect", () => console.log("✅ Redis Connected"));

await redisClient.connect();

export default redisClient;
