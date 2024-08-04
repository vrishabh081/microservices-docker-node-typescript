import { dbConnection } from './config/db';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Server-
app.listen(PORT, () => {
    dbConnection
    console.log(`Auth Service running on http://localhost:${PORT}`);
});
