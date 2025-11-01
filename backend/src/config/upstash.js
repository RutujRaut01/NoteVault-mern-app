import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import dotenv from "dotenv";

dotenv.config();

// imported Ratelimit class takes two parameters 
// 1. Redis object containing redis server information (using redis uri and token)
// 2. Algorithm and parameters (algos like, fixedWindow, slidingWindow, tokenBucket, leakyBucket)
// Create a rate limiter that allows 100 requests per 60 seconds
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(100, "60s"), 
});


// Redis.fromEnv()
// fronEvn() is provided by upstash/Redi which creates redis object by extraction url and token from process.env 
// same as new Redis({
//   url: process.env.UPSTASH_REDIS_REST_URL,
//   token: process.env.UPSTASH_REDIS_REST_TOKEN,
// })

export default ratelimit;
