const redis = require("redis");
const connectRedis = require("connect-redis");
const session = require("express-session");
const RedisStore = connectRedis(session);

//to host the redis server shyd
const redisClient = redis.createClient({
  //By default yhi values hoti h. that means only if hm reacteClient() krde then by default yhhi values hongi host and port ki
  host: "localhost",
  port: 6379,
});

redisClient.on("error", (err) => {
  console.error("Could not connect to redis");
});

redisClient.on("connect", () => {
  console.log("Connected to redis");
});

module.exports = {
  redisClient,
  RedisStore,
  session,
};
