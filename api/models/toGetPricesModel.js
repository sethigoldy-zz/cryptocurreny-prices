'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CurrencySchema = new Schema({
  name: {
    type: String
  },
  symbol: {
    type: String
  },
  rank: {
    type: Number
  },
  price_usd: {
    type: Number
  },
  volume_usd: {
    type: Number
  },
  market_cap_usd: {
    type: Number
  },
  percent_change_1h: {
    type: Number
  },
  percent_change_24h: {
    type: Number
  },
  percent_change_7d: {
    type: Number
  },
  last_updated: {
    type: Number
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
  // status: {
  //   type: [{
  //     type: String,
  //     enum: ['pending', 'ongoing', 'completed']
  //   }],
  //   default: ['pending']
  // }
});

module.exports = mongoose.model('Currency', CurrencySchema);
