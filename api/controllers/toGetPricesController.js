'use strict';

const async = require("async");
const https = require('https');
var mongoose = require('mongoose'),
  CryptoCurrencies = mongoose.model('Currency');

// exports.getPrices = function(req, res) {
//   CryptoCurrencies.find({}, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
  exports.getPrices = function(request, response) {
          let items = [];
          const url ="https://api.coinmarketcap.com/v1/ticker/?limit=10";
            var data_return = https.get(url, res => {
              res.setEncoding("utf8");
               let body = "";
              res.on("data", data => {
                body += data;
              });
              res.on("end", () => {
                body = JSON.parse(body);
                body.forEach(function(doc){
                  items.push(doc);
                });
                async.each(items,
                  // 2nd param is the function that each item is passed to
                  function(item, callback){
                    // Call an asynchronous function, often a save() to DB
                    CryptoCurrencies.find( { name : item.name, last_updated : item.last_updated } , function(err, currency) {
                      if (err)
                        res.send(err);
                      if(currency.length == 0){
                        //callback();
                        var new_currency = new CryptoCurrencies(item);
                        new_currency.save(function(err, currency) {
                          if (err)
                            console.log(err);
                          console.log('not existed');
                          callback();
                        });
                      }else{
                        console.log('currency with same name and time exists');
                        callback();
                      }

                    });


                  },
                  // 3rd param is the function to call when everything's done
                  function(err){
                    // All tasks are done now
                    return response.json('all things are done now');
                  }
                );
              });
          });


  };
