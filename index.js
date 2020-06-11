const express = require('express')
    // const cors = require('cors')
const mail = require('./sendMail')

app = express()

// app.use(cors)

app.get('/', (req, res) => {
    mail(req.query);
    return res.json({
        "Status": "ok",
        "temp": req.query,
    });

});

app.listen(process.env.PORT || 3333);
