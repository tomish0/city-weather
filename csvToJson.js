const csv = require("csvtojson");
const fs = require("fs");
const letters = require("./src/letterArr");

// Use csv converter to convert csv file into alphabetically separated JSON files
// with all the cities that start with the certain letter within
csv()
  .fromFile("./worldcities.csv")
  .then((jsonObj) => {
    var a = [];
    var b = [];
    var c = [];
    var d = [];
    var e = [];
    var f = [];
    var g = [];
    var h = [];
    var i = [];
    var j = [];
    var k = [];
    var l = [];
    var m = [];
    var n = [];
    var o = [];
    var p = [];
    var q = [];
    var r = [];
    var s = [];
    var t = [];
    var u = [];
    var v = [];
    var w = [];
    var x = [];
    var y = [];
    var z = [];

    var alphabet = [
      a,
      b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u,
      v,
      w,
      x,
      y,
      z,
    ];

    jsonObj.forEach((item) => {
      letters.forEach((letter, index) => {
        if (item.city.charAt(0).toLowerCase() === letter) {
          alphabet[index].push(item);
        }
      });
    });

    alphabet.forEach((item, index) => {
      var data = JSON.stringify(item);

      fs.writeFile(
        `./src/worldCities2/${letters[index].toUpperCase()}worldcities.json`,
        data,
        (err) => {
          if (err) console.log(err);
          else {
            console.log("File written successfully");
          }
        }
      );
    });
  });
