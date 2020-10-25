const express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var ObjectId = require('mongoose').Types.ObjectId;
mongoose.set('useFindAndModify', false);
var { UserDetails } = require('../model/userdetails');

router.get('/', (req, res) => {
    UserDetails.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving UserDetails :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var user = new UserDetails({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        dob: req.body.dob,
        email:req.body.email,
        profileImage: req.body.profileImage
    });
    user.save((err, doc) => {
        if (!err) { res.status(200).send(doc); }
        else { console.log('Error in User Details Save :' + JSON.stringify(err, undefined, 2)); }
    });
    
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        var user = {
            firstName: req.body.firstName,
             lastName: req.body.lastName,
             password: req.body.password,
            dob: req.body.dob,
            email:req.body.email,
            profileImage: req.body.profileImage
        };

        UserDetails.findByIdAndUpdate(req.params.id, { $set: user }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
       else { console.log('Error in User Details Update :' + JSON.stringify(err, undefined, 2)); }
   });
 });
module.exports = router;