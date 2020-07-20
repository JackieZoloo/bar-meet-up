import React, { Component } from 'react';
import { Route, Switch, NavLink, Redirect} from 'react-router-dom';
import './App.css';
import MeetupPage from '../MeetupPage/MeetupPage';
import Create from '../CreateMeetup/CreateMeetup';
import EditMeetupPage from '../EditMeetupPage/EditMeetupPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import * as meetupService from '../../utils/meetupService';
import userService from '../../utils/userService';


class App extends Component {
  state = {
    user: userService.getUser(),
    meetups: []
  }

  handleLogout = () => {
    userService.logout();
    this.setState({
      user: null
    }, () => this.props.history.push('/'));
  }

  handleSignupOrLogin = () => {
    this.setState({
      user: userService.getUser()
    }, () => this.props.history.push('/'));
  }
  handleAddMeetup = async newMeetupData => {
    await meetupService.createMeetupAPI(newMeetupData);
    this.getAllMeetups();
  }
  getAllMeetups = async () => {
    const meetups = await meetupService.getAllMeetupsAPI();
    console.log(meetups, 'this is meetupssss');
    this.setState({
      meetups: meetups
    }, () => this.props.history.push('/'));
  }
  componentDidMount() {
    this.getAllMeetups();
  }
  handleDeleteMeetup = async idOfMeetupToDelete => {
    await meetupService.deleteMeetupAPI(idOfMeetupToDelete);
    this.setState(state => ({
      meetups: state.meetups.filter(meetup => meetup._id !== idOfMeetupToDelete)
    }), () => this.props.history.push('/'));
  }
  handleUpdateMeetup = async updatedMeetupData => {
    await meetupService.updateMeetupAPI(updatedMeetupData);
    this.getAllMeetups();
  }
 
  render() {
    return (
      <div >
      <header className="App-header">
        <nav>
          {userService.getUser() ?
            <>
              {userService.getUser().name ? `WELCOME, ${userService.getUser().name.toUpperCase()}` : ''}
              &nbsp;&nbsp;&nbsp;
              <NavLink exact to='/logout' onClick={this.handleLogout}>LOGOUT</NavLink>
              <NavLink exact to='/create' >Create meetup</NavLink>
              &nbsp;&nbsp;&nbsp;
            </>
            :
            <>
              <NavLink exact to='/signup' className="App-signup">SIGNUP</NavLink>
          </>
          }
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} />
          } />
          <Route exact path='/create' render={({ history }) =>
            <Create history={history} handleSignupOrLogin={this.handleSignupOrLogin} 
             handleAddMeetup={this.handleAddMeetup}
            />
          } />
         <Route exact path='/' render={({ history }) =>
              userService.getUser() ?
                <MeetupPage history={history} handleAddMeetup={this.handleAddMeetup} meetupsFromParent={this.state.meetups} handleDeleteMeetup={this.handleDeleteMeetup} />
                :
                <LoginPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} />
            } />
             <Route exact path='/edit' render={({ history, location }) =>
              userService.getUser() ?
                <EditMeetupPage handleUpdateMeetup={this.handleUpdateMeetup} location={location} meetupFromParent={this.state.meetups} />
                :
                <Redirect to='/login' />
            } />
            
        </Switch>
      </main>
    </div>
    );
  }
}

export default App;
