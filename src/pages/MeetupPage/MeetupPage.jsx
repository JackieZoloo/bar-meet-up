import React from 'react';
import MeetupShow from '../../components/MeetupShow/MeetupShow';

function MeetupPage({ meetupsFromParent, handleDeleteMeetup }) {
    return (
        <>
          <h1>meetup page</h1>
          {meetupsFromParent.map(meetup =>
       
             <MeetupShow 
                key={meetup._id}
                meetup={meetup}
                handleDeleteMeetup={handleDeleteMeetup}
                />
       
            )}
        </>
    )
}
export default MeetupPage;