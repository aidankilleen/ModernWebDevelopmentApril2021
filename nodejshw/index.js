// node.js express web server
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => { 
    res.send(`
    <h1>Node.js Web Server</h1>
    <p>this is working.</p>`);
});

app.listen(port, ()=>{
    console.log(`Web server listening on port ${port}`);
});







