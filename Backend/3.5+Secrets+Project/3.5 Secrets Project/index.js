//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming


import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
// import bodyParser from "body-parser";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

var userAuthorised = false;
app.use(express.urlencoded({ extended: true }));
function checkPassword(req, res, next){
    const password =  req.body["password"];
    if(password === "ILoveProgramming") {
        userAuthorised = true;
    }
    next();
}


app.use(checkPassword);

app.get("/", (req, res) => {
    // res.send("<h1>TESTING</h1>");
    res.sendFile(__dirname+"/public/index.html");
});

app.post("/check", (req, res) => {
    console.log(req.body);
    if(userAuthorised){
        res.sendFile(__dirname + "/public/secret.html");
        userAuthorised =  false;
    }else {
        // res.sendFile(__dirname + "/public/index.html");
        res.redirect("/");
    }
});

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});