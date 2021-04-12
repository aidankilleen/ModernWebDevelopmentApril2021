// node.js express web server
const http = require('http');
const https = require('https');
const fs = require('fs');

const express = require('express');
const app = express();

const credentials = {
    key: fs.readFileSync('./security/cert.key', 'utf8'), 
    cert: fs.readFileSync('./security/cert.pem', 'utf8')
};

app.use((req, res, next)=> {
    console.log("middleware called");
    if (req.secure) {
        next();
    } else {
        //res.send("use https!");
        let url = `https://${req.headers.host}${req.url}`;
        console.log(`redirecting to ${url}`);
        res.redirect(url);
    }
});

app.use(express.static('public'));

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(80, ()=>{
    console.log(`HTTP Web server listening on port 80`);
});

httpsServer.listen(443, ()=> {
    console.log(`HTTPS Web server listening on port 443`);
});







