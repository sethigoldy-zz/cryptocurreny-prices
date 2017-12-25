'use strict';
module.exports = function(app) {
  var toGetPrices = require('../controllers/toGetPricesController.js');

  // todoList Routes
  app.route('/get_price/:key?')
    .get(toGetPrices.getPrices)
  //   //.post(toGetPrices.create_a_task)
    ;



  // app.route('/get_price/:currency')
  //   .get(toGetPrices.read_a_task)
  //   .put(toGetPrices.update_a_task)
  //   .delete(toGetPrices.delete_a_task);
};
