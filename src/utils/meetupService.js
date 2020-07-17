
import tokenService from './tokenService';

const BASE_URL = '/api/meetups';

// index
export function getAllMeetupsAPI() {
  return fetch(BASE_URL, {
      headers: {
        'Authorization': `Bearer ${tokenService.getTokenFromLocalStorage()}`
      }
  })
  .then(allPuppies => allPuppies.json());
}

// create
export function createMeetupAPI(meetupToCreate) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${tokenService.getTokenFromLocalStorage()}`
        },
        body: JSON.stringify(meetupToCreate)
    }).then(newMeetup => newMeetup.json());
}


// delete
export function deleteMeetupAPI(meetupIdToDelete) {
    return fetch(`${BASE_URL}/${meetupIdToDelete}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${tokenService.getTokenFromLocalStorage()}`
        }
    }).then(deletedMeetup => deletedMeetup.json());
}

//
export function updateMeetupAPI(meetupToUpdate) {
    return fetch(`${BASE_URL}/${meetupToUpdate._id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${tokenService.getTokenFromLocalStorage()}`
        },
        body: JSON.stringify(meetupToUpdate)
    }).then(updatedMeetup => updatedMeetup.json());
}