import mongoose from "mongoose";
import config from "../config.js";
const URI = config.mongo_uri;

mongoose
  .connect(URI)
  .then(() => console.log("🆗 Conectados a MongoDB"))
  .catch((err) => console.log(err));