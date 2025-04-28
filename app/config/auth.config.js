// app/config/auth.config.js
export default {
    // secret: "HelloWorld", // Replace with your own secret key
    secret: process.env.JWT_SECRET_KEY
};