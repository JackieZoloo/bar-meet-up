import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './EditMeetupPage.css';

class EditMeetupPage extends Component {
    state = {
        formData: this.props.location.state.clickedOnMeetup
    };

    handleChange = e => {
        this.setState({
            formData: {
                ...this.state.formData,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleUpdateMeetup(this.state.formData);
    };

    render() {
        return (
            <div className="EditMeetupPage-container">
                <h1>Edit Meetup</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Meetup Name (required)</label>
                        <input
                            className="form-control"
                            name="eventName"
                            value={this.state.formData.eventName}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Meetup Street Address</label>
                        <input
                            className="form-control"
                            name="streetAddress"
                            value={this.state.formData.streetAddress}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Meetup city</label>
                        <input
                            className="form-control"
                            name="streetAddress"
                            value={this.state.formData.city}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Meetup Street State</label>
                        <input
                            className="form-control"
                            name="streetAddress"
                            value={this.state.formData.state}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Meetup Street State</label>
                        <input
                            className="form-control"
                            name="streetAddress"
                            value={this.state.formData.date}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Meetup Street State</label>
                        <input
                            className="form-control"
                            name="streetAddress"
                            value={this.state.formData.zipCode}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Meetup Street State</label>
                        <input
                            className="form-control"
                            name="streetAddress"
                            value={this.state.formData.time}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-xs"
                    >
                        SAVE Meetup
          </button>&nbsp;&nbsp;
          <Link to='/'>CANCEL</Link>
                </form>
            </div>
        );
    }
}

export default EditMeetupPage;