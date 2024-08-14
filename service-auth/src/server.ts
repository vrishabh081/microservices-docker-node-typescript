import dotenv from "dotenv";
dotenv.config();
import { dbConnection } from './config/db';
import express from 'express';
import bodyParser from 'body-parser';
import router from "./routes";
import { kafkaAdmin } from "./kafka/admin";

const app = express();

app.use(bodyParser.json());
app.use(express.json())
app.use("/", router)

// Server-
app.listen(process.env.PORT, async () => {
    dbConnection;
    console.log(`Auth Service running on http://localhost:${process.env.PORT}/${process.env.SERVICE_TYPE}`);
    kafkaAdmin()
});
