import express from 'express';
import 'dotenv/config';


const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("hello world with nodejs")
})

app.listen(port, () => {
    console.log("node js server is running: " + port);
})