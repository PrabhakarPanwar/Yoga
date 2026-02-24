import express from "express";
import every from "./AuthRoute/routes.js";
import cors from "cors";
import connect from "./database/connection.js";

let app = express();

connect();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(every);

app.listen(8000, () => {
  console.log("done");
});
