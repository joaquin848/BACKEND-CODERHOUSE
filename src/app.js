import express from "express"
import "./config/db.config.js"
import authRouter from "./routes/auth.router.js"


const app = express ()

app.use(express.json())
app.use(express.urlencoded ({extended:true}))

app.use("/api/auth", authRouter);

app.listen(8080, () => console.log ("server running on port 8080...."));