import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render(__dirname+"/views/index.ejs");
});

app.post("/submit", (req, res) => {
  let name = req.body["fName"] + req.body["lName"];
  let nameLength = name.length;
  // console.log(nameLength);
  res.render(__dirname + "/views/index.ejs", { length : nameLength } );
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
