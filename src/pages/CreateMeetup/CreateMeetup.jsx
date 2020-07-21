import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CreateMeetup.css';

class CreateMeetup extends Component {
    state = {
        formData: {
            eventName: '',
            description: '',
            barName: '',
            streetAddress: '',
            city: '',
            state: '',
            zipCode: '',
            date: '',
            time: ''
        }
    }
    handleChange = e => {
        const formDataAsUserTypes = {
            ...this.state.formData,
            [e.target.name]: e.target.value
        }
        this.setState({
            formData: formDataAsUserTypes
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddMeetup(this.state.formData);
    }
    render() {
        return(
           <div className="CreateMeetup-container">
             <h1>Create Meetup</h1>
             <form onSubmit={this.handleSubmit}>
                 <label>Event Name</label>
                 <input 
                    name='eventName'
                    value={this.state.formData.eventName}
                    onChange={this.handleChange}
                    required
                 />
                 <label>Description</label>
                 <input 
                    name='description'
                    value={this.state.formData.description}
                    onChange={this.handleChange}
                    required
                 />
                  <label>Bar Name</label>
                 <input 
                    name='barName'
                    value={this.state.formData.barName}
                    onChange={this.handleChange}
                    required
                 />
                 <label>Place Street Address</label>
                 <input 
                    name='streetAddress'
                    value={this.state.formData.streetAddress}
                    onChange={this.handleChange}
                    required
                 />
                 <label>City</label>
                 <input 
                    name='city'
                    value={this.state.formData.city}
                    onChange={this.handleChange}
                    required
                 />
                 <label>State</label>
                 <input 
                    name='state'
                    value={this.state.formData.state}
                    onChange={this.handleChange}
                    required
                 />
                 <label>Zip Code</label>
                 <input 
                    name='zipCode'
                    value={this.state.formData.zipCode}
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
                 <label>time</label>
                 <input 
                    name='time'
                    value={this.state.formData.time}
                    onChange={this.handleChange}
                    required
                 />
                <div  className="create-button">
                 <button type="submit">
                     Create Meetup
                 </button>
                 <Link className="CreateMeetup-link"to='/'>CANCEL</Link>
                 </div>
             </form>
           </div>
        )
    }
}
export default CreateMeetup;
