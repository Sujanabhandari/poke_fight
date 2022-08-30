

let jsonData = require("../poker.json");

const get_all_pokemon= async (req, res, next) => {
//  console.log(jsonData);
  try {
    return res.status(200).send(jsonData);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const get_all_pokemon_id = async (req, res, next) => {
    console.log("Hello");
    console.log(req.params.id);

    const { id } = req.params;

    let result = jsonData.filter(data => id == data.id)
    console.log(result)

     try {
       return res.status(200).send(result);
     } catch (err) {
       console.log(err);
       next(err);
     }
   };
   


module.exports = {
    get_all_pokemon,
    get_all_pokemon_id
};
