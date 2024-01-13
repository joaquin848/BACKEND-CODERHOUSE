import dotenv from "dotenv";

dotenv.config();

export default {
    mongo_uri: process.env.MONGO_URI,
    gmail_user: process.env.GMAIL_USER,
    gmail_password: process.env.GMAIL_PASSWORD,
    jwt_secret_key: process.env.JWT_SECRET_KEY,
}