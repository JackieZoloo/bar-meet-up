const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const peopleSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const meetupSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    eventName: {
        type: String,
        required: true
    },
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
    },
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