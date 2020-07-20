import React from 'react';
import { Link } from 'react-router-dom';
import './MeetupShow.css';

function MeetupShow({ meetup , handleDeleteMeetup}) {
    // state = {
    //     formData: {
    //         people: ''
    //     }
    // }
    // handleChange = e => {
    //     const formDataAsUserTypes = {
    //         ...this.state.formData,
    //         [e.target.name]: e.target.value
    //     }
    //     this.setState({
    //         formData: formDataAsUserTypes
    //     })
    // }
    // handleSubmit = e => {
    //     e.preventDefault();
    //     this.props.handleAddMeetup(this.state.formData);
    // }
    return (
        <div className="MeetupShow-container">
            <h1>Do you wnat to join ?</h1>
            <h5>{meetup.eventName}</h5>
            <h5>{meetup.streetAddress}</h5>
            <h5>{meetup.city}</h5>
            <h5>{meetup.state}</h5>
            <h5>{meetup.zipCode}</h5>
            <h5>{meetup.date}</h5>
            <h5>{meetup.time}</h5>
            <div className="buttons">
            <button > <span>2 </span>JOINED </button>
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