const express = require('express');
const router = require('./routes');
const authRoute = require('./routes/auth')

const app = express();

//Middlewares
app.use(express.json());
app.use('/api/user', authRoute)
app.use(router);
//Auth Middleware

app.listen(8080, () => console.log('server listening on port 8080'));

