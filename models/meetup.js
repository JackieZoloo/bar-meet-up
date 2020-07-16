const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
    streetAddress: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipCode: {
        type: Number,
        required: true
    }
})
const peopleSchema = new Schema({
    name: {
        type: String,
        required: true
}
})

const meetupSchema = new Schema({
    eventName: {
        type: String,
        required: true
    },
    place: [placeSchema],
    date: {
        type: Date,
        required: true
    },
    peopleGoing: [peopleSchema],
    time: {
        type: String,
        required: true
    } 
},{
    timestamps: true
})
module.exports = mongoose.model('Meetup', meetupSchema);