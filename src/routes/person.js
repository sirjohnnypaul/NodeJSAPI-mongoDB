let express = require('express');
let router = express.Router();

// Simple route without params or querry strings
// router.get('/person',(req,res) => {
//     res.send('You have requested a person');
// })

//Parameters
// /person/johnny
router.get('/person/:name',(req,res) => {
    res.send(`You have requested a person with name: ${req.params.name}`);
})

//QueryString, checking optionally if contains queries and detects their types
//  /person?name=Johnny
router.get('/person',(req,res) => {
    if(req.query.name) {
        res.send(`You have requested a person with name: ${req.query.name}`);
    } else {
        res.send('You have requested a person');
    }
});

router.get('/error',(req,res) => {
    throw new Error('This is a forced error.');
});

module.exports = router;