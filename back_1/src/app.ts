import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: false,
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());

// API routes
const router = express.Router();
import convertStringRouter from "./routes/convertStringRouter";

router.use("/convertstring", convertStringRouter);

app.use("/api", router);

export default app;
