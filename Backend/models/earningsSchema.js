const mongoose = require('mongoose');

const earningSchema = new mongoose.Schema({
  earnerId:      { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  buyerId:       { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount:        { type: Number, required: true },
  earningType:   { type: String, enum: ['purchase', 'referral'], required: true },
  level:         { type: Number },
  transactionId: { type: String },
  createdAt:     { type: Date, default: Date.now }
});

exports.earningModel = mongoose.model('Earning', earningSchema);


// test100 -> EDA08E2E -> id: 6853cd01b18217d27e99197b

// test200 -> C0ACA412 -> id: 6853cd99b18217d27e991983