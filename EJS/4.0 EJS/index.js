import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

console.log(__dirname);

app.get("/", (req, res) => {
	// res.send("TESTING");F
	const currentDate = new Date();
	const currentDay = currentDate.getDay();

	let type = "a weekday";
	let adv = "it's time to work hard";
	if (currentDay === 6 || currentDay === 0) {
		type = "the weekend";
		adv = "it's time to have some fun";
	}

	res.render(__dirname + "/views/index.ejs", {
		dayType: type,
		advice: adv,
	});
});

app.listen(port, () => {
	console.log(`Server is running at ${port}`);
});
