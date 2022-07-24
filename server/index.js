const express = require('express')
const app = express();
const bodyParser = require('body-parser')

// //Database
// require('./Database/db');

// CORS
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,PATCH,DELETE');
    if(req.method === "OPTIONS"){
        res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
        return res.status(200).json({});
    }
    next();
})


//Body-Parse
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/work', (req, res) => {
    res.send('Its Work')
});

app.get('/tes', (req, res) => {
    res.send('Route Tes')
});

const PORT = 5000;
app.listen(PORT,console.log(`SERVER ${PORT}`))