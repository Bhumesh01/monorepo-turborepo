import express from "express";
const app = express();
app.use(express.json());

app.get("/healthcheck", (req, res)=>{
    res.send({
        "message": "Welcome"
    })
})

app.listen(3001);