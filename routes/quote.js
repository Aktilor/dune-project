var express = require('express');
const axios = require('axios');
const fs = require('fs');
require('dotenv').config();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    axios.get('https://the-dune-api.herokuapp.com/quotes')
    .then(response => {
        const quote = JSON.stringify(response.data[0].quote);
        console.log(quote);

        // IMG Generator
        axios.get(encodeURI('https://img.bruzu.com/?apiKey='+process.env.API_KEY_BRUZU+'&backgroundImage=https://source.unsplash.com/zuueig1w8WI/7632x6480&h=6480&w=7632&a.text=' + quote + '&a.color=white&a.fontFamily=Poppins&a.fontWeight=800&a.width=7632&a.fs=375&a.ta=center'), {responseType: "stream"} )  
        .then(response => {  
            // Saving file to working directory  
            response.data.pipe(fs.createWriteStream("output.png"));  
        })  
            .catch(error => {  
            console.log(error);  
        }); 

        res.render('quote', { quote: quote });
    })
    .catch(error => {
        console.log(error);
    });
});

module.exports = router;