

let jsonData = require("../poker.json");

const get_all_pokemon= async (req, res, next) => {
 console.log(jsonData);
  try {
    return res.status(200).send(jsonData);
  } catch (err) {
    console.log(err);
    next(err);
  }
};


module.exports = {
    get_all_pokemon
};