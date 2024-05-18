import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("ok");
});

app.listen(3000, () => {
    console.log(`Listen at PORT:3000`);
});
