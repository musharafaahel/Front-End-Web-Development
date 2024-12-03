import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", (req, res) => {
    // res.send("<h1>Testing</h1>");
    res.render("main.ejs")
});

app.post("/", (req, res) => {
    const heading = req.body["postHeading"];
    const content = req.body["postContent"];

    res.render("post.ejs", { h01 : heading, h02 : content });
    
});


app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});