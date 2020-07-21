import React from 'react';
import { Link } from 'react-router-dom';
import './MeetupShow.css';

function MeetupShow({ meetup , handleDeleteMeetup, handleAddPeople}) {

    
    
    
    return (
        <div className="MeetupShow-container">
            <h1>Do you want to join ?</h1>
            <h2>{meetup.eventName}</h2>
            <h2>{meetup.description}</h2>
            <span>{meetup.streetAddress} </span>
            <span>{meetup.city} </span>
            <span className="zipCode">{meetup.state } </span>
            <span >{meetup.zipCode} </span>
            <span>on {meetup.date} </span>
            <span>at {meetup.time}</span>
            <div className="buttons">
    <button  onClick={() => handleAddPeople(meetup._id)}> <span>{meetup.peopleGoing.length}</span>JOINED </button>
               <button><Link  to={{ pathname: '/edit', state: {clickedOnMeetup: meetup}  }}>EDIT</Link></button> 
                <button     
                onClick={() => handleDeleteMeetup(meetup._id)}
                    >
                    DELETE
                </button>
            </div>
        </div>

    )
}
export default MeetupShow