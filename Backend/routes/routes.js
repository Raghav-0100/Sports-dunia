const express = require('express');
const { registerUser } = require('../controllers/userRegister');
const { referralEarning } = require('../controllers/referralEarnings');
const { earningDetails } = require('../controllers/earningDetails');

const router = express.Router();

router.get('/health', (req, res) => res.send('HEALTH CHECK : OK'));

router.post('/register', registerUser);

router.post('/purchase', referralEarning);

router.get('/earnings/:userId', earningDetails);

module.exports = router;
