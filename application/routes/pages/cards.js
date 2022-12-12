const express = require("express");
const router = express.Router();
const db = require('../../db/index');

const color = ['red', 'blue', 'yellow', 'green', 'wild'];
const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11 ,12];
// 0-9 real number vals,10-12 are corespondent to skip,reverse,addtwo,addfour
const special = ['none', 'skip', 'reverse', 'addTwo', 'addFour'];

router.get("/cards", (request, response) => {


color.forEach(colorVal => {
 if(colorVal == "wild"){
    //need to get addfour and wildcard
 }
    number.forEach(numVal => {   
 //needs more work
        db.any(`INSERT INTO card ("color,value,effect,inDeck") VALUES ('1`,colorVal,numVal,'none','true'`')`)
        .then( _ => db.any(`SELECT * FROM card`) )
        .then( results => response.json( results ) )
        .catch( error => {
          console.log( error )
          response.json({ error })
        })
    });
    });   
});
module.exports = router;