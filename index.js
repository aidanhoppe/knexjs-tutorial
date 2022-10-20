const express = require('express');
const router = require('./routes');
const https = require('https');
const path = require('path')
const fs = require('fs')
// const cors = require('cors');

const app = express();
// app.use(cors());
app.use(express.json());
app.use(router);

// const sslServer = https.createServer(
//     {
//         key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
//         cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem')),
//     },
//     app
// )

// sslServer.listen(8080, () => console.log('server listening on port 8080'));
app.listen(8080, () => console.log('server listening on port 8080'));

