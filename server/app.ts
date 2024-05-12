import express, { Request, Response } from "express";
import cors from "cors";
import { config } from "dotenv";
import mongoose from "mongoose";

const app = express();

mongoose.connect(process.env.MONGO_CONN_STR as string);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/test", async (req: Request, res: Response) => {
    res.json({ message: "Hello from Vighnesh!" });
});

mongoose
    .connect(process.env.PORT as string)
    .then(() => {
        console.log("Connection established with MongoDB!");
        app.listen(process.env.PORT as string, () =>
            console.log(`Server listening on port ${process.env.PORT}!`)
        );
    })
    .catch((err) => console.log(err));
