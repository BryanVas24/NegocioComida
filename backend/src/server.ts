import express from "express";
import cors from "cors";
import dotenv from "dotenv";

//Con esto ya se leen los datos del archivo .env
dotenv.config();

const server = express();

/* Aún no creo el corsConfig pero estara en la carpeta config
server.use(cors(corsConfig));
*/

export default server;
