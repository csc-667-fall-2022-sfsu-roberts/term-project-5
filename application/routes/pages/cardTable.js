const express = require("express");
const router = express.Router();
const db = require('../../db/index');

const color1 = ['red', 'blue', 'yellow', 'green', 'wild'];
const number = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
const special = ['none', 'skip', 'reverse', 'addTwo', 'addFour'];

router.get("/", (request, response) => {

    let counter = 0;
    color1.forEach(colorVal => {

        number.forEach(numVal => {
            var efx = special[0];
            switch (numVal) {
                case "ten": efx = special[1];
                    break;
                case "eleven": efx = special[2];
                    break;
                case "twelve": efx = special[3];
                    break;


            }
            counter++;
            currentCard = [counter, colorVal, numVal, efx];

             db.any(`INSERT INTO "cardTable" (color,value,effect) VALUES ('${colorVal}','${numVal}','${efx}')`)
              .then( _ => db.any(`SELECT * FROM "cardTable"`) )
              .then( results => response.json( results ) )
              .catch( error => {
              console.log( error )
              response.json({ error })
              })


        })
    })
});
module.exports = router;