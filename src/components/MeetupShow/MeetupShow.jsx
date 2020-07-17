import React from 'react';

function MeetupShow({ meetup , handleDeleteMeetup}) {
    return (
        <div>
            <h1>MeetupShow</h1>
            <h5>{meetup.eventName}</h5>
            <h5>{meetup.streetAddress}</h5>
            <h5>{meetup.city}</h5>
            <h5>{meetup.date}</h5>
            <button     
              onClick={() => handleDeleteMeetup(meetup._id)}
                >
                DELETE
            </button>
        </div>

    )
}
export default MeetupShow