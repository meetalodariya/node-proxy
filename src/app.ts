import express from "express";
import bodyParser from "body-parser";
import * as apolloQuery from "./utils/apollo-client/query";

const app = express();

// Module imports
import healthCheckRouter from "./routes/health-check";

// Configuration
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use(healthCheckRouter);

app.listen(3000);
