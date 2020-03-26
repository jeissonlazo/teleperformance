const { Router } = require('express');
const router = Router();
const jwt = require('jsonwebtoken');

const hours = require('../models/hours');

router.post('/hours',async (req,res) =>{
    const {
        EmploymentId,
        Names,
        startDate,
        endDate,
        startTurn,
        endTurn,
        startTime,
        endTime,
        reason} = req.body;

    const newHours = new hours({
        EmploymentId,
        Names,
        startDate,
        endDate,
        startTurn,
        endTurn,
        startTime,
        endTime,
        reason});
    await newHours.save();

    res.status(200).send('save');
})

router.get('/getHours',async (req,res) =>{
    const listHours = hours.find({});
    hours.find({}, function (err, docs) {
        console.log(docs)
        res.json(docs);
    });
})

module.exports = router;
