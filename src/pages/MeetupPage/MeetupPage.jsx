import React from 'react';
import MeetupShow from '../../components/MeetupShow/MeetupShow';
import './MeetupPage.css';

function MeetupPage({ meetupsFromParent, handleDeleteMeetup }) {
    return (
        <div className="MeetupPage-container">
          {meetupsFromParent.map(meetup =>
       
             <MeetupShow 
                key={meetup._id}
                meetup={meetup}
                handleDeleteMeetup={handleDeleteMeetup}
                />
       
            )}
        </div>
    )
}
export default MeetupPage;