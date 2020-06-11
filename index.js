const express = require('express')
    // const cors = require('cors')
const mail = require('./sendMail')

app = express()

// app.use(cors)

app.post('/', (req, res) => {
    mail(temp);
    return res.json({
        "Status": "ok",
        "temp": req.query.temp,
    });

});

app.listen(3333);