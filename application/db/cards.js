console.log("test1");
const db = require('./index');

const color = ['red', 'blue', 'yellow', 'green', 'wild'];
// 0-9 real number vals,10-12 are corespondent to skip,reverse,addtwo,addfour;
const number = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
const special = ['none', 'skip', 'reverse', 'addTwo', 'addFour'];

router.get("/cards", (request, response) => {

  color.forEach(colorVal => {
    let counter = 0;
    if (colorVal == "wild") {
      //need to get addfour and wildcard
    }
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

      console.log(colorVal + " " + numVal + " " + efx)
      const card = new Card(colorVal, numVal, efx, counter);


      let query = `INSERT INTO cardTable
        (id, color,value,effect) VALUES ?;`;
      counter++;
      values = [counter, colorVal, numVal, efx]

      db_con.query(query, [values], (err, rows) => {
        if (err) throw err;
        //testing db
        console.log("New Row inserted");
      });
    });
  });
});


module.exports = router;