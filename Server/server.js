import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000   

app.use(express.json());

app.listen(5000,()=>{
    console.log("Server started at http://localhost:"+port);
});
