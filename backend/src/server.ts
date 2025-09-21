import express from "express";

//Con esto ya se leen los datos del archivo .env y se definio hasta arriba para que abarque todo
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import { testDatabaseConnection } from "@config/database";

const server = express();
testDatabaseConnection();

/* Aún no creo el corsConfig pero estara en la carpeta config
server.use(cors(corsConfig));
*/

export default server;
