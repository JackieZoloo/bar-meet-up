import React from 'react';
import { Link } from 'react-router-dom';

function MeetupShow({ meetup , handleDeleteMeetup}) {
    return (
        <div>
            <h1>MeetupShow</h1>
            <h5>{meetup.eventName}</h5>
            <h5>{meetup.streetAddress}</h5>
            <h5>{meetup.city}</h5>
            <h5>{meetup.state}</h5>
            <h5>{meetup.zipCode}</h5>
            <h5>{meetup.date}</h5>
            <h5>{meetup.time}</h5>
            <Link  to={{ pathname: '/edit', state: {clickedOnMeetup: meetup}  }}>EDIT</Link>
            <button     
              onClick={() => handleDeleteMeetup(meetup._id)}
                >
                DELETE
            </button>
            <button >
                going
            </button>
        </div>

    )
}
export default MeetupShow