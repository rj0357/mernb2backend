import { createClient } from "redis";

const redisClient = createClient({
  url: "const client = require('redis').createClient({ username: 'default', password: 'vDSFipmcNmKaJzewfhX9oV9QIZqHVBNu', socket: { host: 'redis-15825.c212.ap-south-1-1.ec2.redns.redis-cloud.com', port: 15825 } });"
});

redisClient.on("error", (err) => console.error("❌ Redis Error:", err));
redisClient.on("connect", () => console.log("✅ Redis Connected"));

await redisClient.connect();

export default redisClient;
