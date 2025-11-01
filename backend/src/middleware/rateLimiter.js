import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    try {
        const { success } = await ratelimit.limit("my-limit-key");
        // in real world projects instead of "my-limit-key" we will use user_id generated through authentication to 
        // make sure only user who is making high requests gets rate limited.
        if (!success) {
            return res.status(429).json({
                message: "Too many requests, please try again later",
            });
        }
        next(); // ✅ Don't forget this — otherwise requests hang
    } catch (error) {
        console.log("Rate limit error", error);
        next(error);
    }
};

export default rateLimiter;
