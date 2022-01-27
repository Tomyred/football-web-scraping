import express, { json, urlencoded } from "express";
import cors from "cors";
import router from "./routes/routes.js";

const app = express();

const port = process.env.PORT || 8080;

app.use(json());
app.use(cors());
app.use(urlencoded({extended: false}));
app.use(router);

app.listen({port}, () => {

    console.log(`Mustang Cloud Challenge - Server started at http://localhost:${port}`);
});