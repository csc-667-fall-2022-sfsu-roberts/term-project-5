const express = require("express");
const router = express.Router();
const db = require('../../db/index');

const color = ['red', 'blue', 'yellow', 'green', 'wild'];
// 0-9 real number vals,10-12 are corespondent to skip,reverse,addtwo,addfour;
const number = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve"];
const special = ['none', 'skip', 'reverse', 'addTwo', 'addFour'];

router.get("/cards", (request, response) => {


color.forEach(colorVal => {
 if(colorVal == "wild"){
    //need to get addfour and wildcard
 }
    number.forEach(numVal => {   
 //needs more work

//  switch(num){
// 	case"ten": efx = skip;
// 	case"eleven": effx=revers
// 	case"twelve": efx=addtwo
// 	}

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