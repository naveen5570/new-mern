// routes/api/Requests.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
// Load Book model
//const Book = require('../../models/Book');
const Request = require('../../models/Request');
const auth = require('../../middleware/auth');

// @route GET api/books/test
// @description tests books route
// @access Public
const Req = mongoose.model("Request");

router.get('/',function(req,res){
 res.send('test'); 
});

router.post('/place', function(req,res){

  //console.log('tttt');
  
  new Req({
        specialisation: req.body.specialisation,
        repair_explanation: req.body.repair_explanation,
        repair_immediately: req.body.repair_immediately,
        address_1: req.body.address_1,
        address_2: req.body.address_2,
        country: req.body.country,
        state_or_province: req.body.state_or_province,
        zipcode: req.body.zipcode,
        city: req.body.city,
        status: "1",
        user_id: "61c07a2a0c722cbc0c89d645"
    }).save(function(err,doc){
    if(err)res.json(err);
    else res.json({ msg: 'Request Placed Successfully' });
      
      });
    });

module.exports = router;