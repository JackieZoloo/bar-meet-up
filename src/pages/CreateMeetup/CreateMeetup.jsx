import React, { Component } from 'react';

class CreateMeetup extends Component {
    state = {
        formData: {
            eventName: '',
            place: {
                streetAddress: '',
                city: '',
                state: '',
                zipCode: ''
            },
            date: ''
        }
    }
    handleChange = e => {
        const formDataAsUserTypes = {
            ...this.state.formData,
            [e.target.name]: e.target.value
        }
        this.setState({
            formdata: formDataAsUserTypes
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddMeetup(this.state.formData);
    }
    render() {
        return(
           <>
             <h1>Create Meetup</h1>
             <form onSubmit={this.handleSubmit}>
                 <label>Event Name</label>
                 <input 
                    name='eventName'
                    value={this.state.formData.eventName}
                    onChange={this.handleChange}
                    required
                 />
                 <label>Place Street Address</label>
                 <input 
                    name='streetAddress'
                    value={this.state.formData.place.streetAddress}
                    onChange={this.handleChange}
                    required
                 />
                 <label>City</label>
                 <input 
                    name='city'
                    value={this.state.formData.place.city}
                    onChange={this.handleChange}
                    required
                 />
                 <label>State</label>
                 <input 
                    name='state'
                    value={this.state.formData.place.state}
                    onChange={this.handleChange}
                    required
                 />
                 <label>Zip Code</label>
                 <input 
                    name='zipCode'
                    value={this.state.formData.place.zipCode}
                    onChange={this.handleChange}
                    required
                 />
                 <label>Date</label>
                 <input 
                    name='date'
                    value={this.state.formData.date}
                    onChange={this.handleChange}
                    required
                 />
                 <label>Event Name</label>
                 <button type="submit">
                     Create Meetup
                 </button>
             </form>

           </>
        )
    }
}
export default CreateMeetup;
