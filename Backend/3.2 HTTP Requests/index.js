import express from "express";
const app = express();
const portNo = 3000;

app.get("/", (req,res ) => {
    // console.log(req.rawHeaders);
    res.send("<h1>Hello World!</h1>");
});

app.get("/About", (req, res) => {
	// console.log(req.rawHeaders);
	res.send("<h1> About us</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact us</h1>");
} );

app.listen(portNo, () => {
    console.log(`Local host Server is running at port no : ${portNo}`);
});