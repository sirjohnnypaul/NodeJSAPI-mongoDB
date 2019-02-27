let express = require('express');
let app = express();
//request routes
let personRoute = require('./routes/person');
let customerRoute = require('./routes/customer');

let path = require('path');
let bodyParser = require('body-parser');

app.use(bodyParser.json());

//make console log for each route request
app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body);
    next();
});

//serve static files
app.use(express.static('public'));
app.use(personRoute);
app.use(customerRoute);

//It will execute for each undefined route request
app.use((req,res,next) => {
    res.status(404).send('Not found ;)');
});

//500 error, internal server error
app.use((err,req,res,next) => {
    console.error(err.stack);
    res.sendFile(path.join(__dirname,'../public/500.html'));
});

const PORT = process.env.PORT || 3401
//listen 
app.listen(PORT, () => console.info(`Started on port ${PORT}`));

