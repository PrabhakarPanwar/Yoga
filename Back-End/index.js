import express from "express";
import every from "./AuthRoute/routes.js";
import cors from "cors";

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(every);

app.listen(8000, () => {
  console.log("done");
});
