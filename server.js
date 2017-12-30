var express = require('express'); 

var app = express(); 
const PORT = process.env.PORT; 

app.use(function (req, res, next) {
    if(req.header['x-forwarded-proto'] === 'http'){
        next();
    }
    else {
        res.redirect('http://' + req.hostname + req.url);

    }
});

app.use(express.static('public'));

app.listen(PORT, function () {
    console.log('Express server started at port ' + PORT);
});