const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const meetupSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    eventName: {
        type: String,
        required: true
    },
    description: {
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
    peopleGoing: [ {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    time: {
        type: String,
        required: true
    } 
},{
    timestamps: true
})
module.exports = mongoose.model('Meetup', meetupSchema);