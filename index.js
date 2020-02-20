import * as Sentry from "@sentry/node";
import dotenv from "dotenv";
import routes from "./routes";
import express from "express";
import validate from "express-validation";
import cors from "cors";
import bodyParser from "body-parser";
import Youch from "youch";
import BusinessException from "./exceptions/BusinessException";

dotenv.config();

const port = process.env.API_PORT;

const app = express();

Sentry.init({ dsn: process.env.SENTRY_DNS });


app.use(Sentry.Handlers.requestHandler());

app.use(cors());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(routes);

if (process.env.NODE_ENV === "production") {
    app.use(Sentry.Handlers.errorHandler());
}

app.use(async (err, req, res, next) => {
    if (err instanceof BusinessException) {
        let data = {
            name: err.name,
            message: err.message
        };
        return res.status(err.status).json(data);
    }
    if (err instanceof validate.ValidationError) {
        return res.status(err.status).json(err);
    }
    if (process.env.NODE_ENV !== "production") {
        const youch = new Youch(err, req);
        return res.json(await youch.toJSON());
    }
    return res
        .status(err.status || 500)
        .json({ error: "Internal Server Error" });
});

app.listen(port, () => {
    console.log(`Server is running at localhost:${port}`);
});
