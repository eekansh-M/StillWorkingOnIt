import express from "express";
import cors from "cors";
import helmet from "helmet";
import path from "path";
import router from "./route/route.js";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());



app.use("/", router);

export default app;
