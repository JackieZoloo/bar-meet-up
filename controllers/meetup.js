const Meetup = require('../models/meetup');
const auth = require('../config/auth');

module.exports = {
    index,
    create,
    update,
    delete: deleteOne,
    addPeople
};

// index
async function index(req, res) {
    try{
        const meetups = await Meetup.find({user: req.user._id}).populate('user');
        console.log(meetups, "this controller");
        res.status(200).json(meetups);
    }
    catch(err){
        res.status(500).json(err);
    }
}

// create
async function create(req, res) {
    req.body.user = req.user._id;
    try{
        const meetup = await Meetup.create(req.body);
        res.status(201).json(meetup);
    }
    catch(err){
        res.status(500).json(err);
    }
}

// update
async function update(req, res) {
    try{
        const updatedMeetup = await Meetup.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updatedMeetup);
    }
    catch(err){
        res.status(500).json(err);
    }
}
//update people
async function addPeople(req, res) {
    try{
        const foundMeetup = await Meetup.findById(req.params.id)
        foundMeetup.peopleGoing.push(req.user)
        await foundMeetup.save()
        console.log(foundMeetup);
        res.status(200).json(foundMeetup);
    }
    catch(err) {
        res.status(500).json(err);
    }
}
// delete
async function deleteOne(req, res) {
    try{
        const deletedMeetup = await Meetup.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedMeetup);
    }
    catch(err){
        res.status(500).json(err);
    }
}