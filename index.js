import express from 'express';

const app = express();

app.get('/', (req, res) => {
    console.log("get request route.");
    res.status(200).json({
        success: true
    })
})

app.listen(3000);