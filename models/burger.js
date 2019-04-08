// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function (res)  {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res)  {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },
  // add a delete for the burgers
  delete: function(col, val, cb) {
    // call the orm delete method 
    // with the "burgers" table
    orm.delete("burgers", col, val, function (data)  {
      cb(data);
    });
  }
};
burger.selectAll((data) => {
  console.log(data);
});

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
