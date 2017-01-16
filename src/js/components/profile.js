import React from 'react';
import {Router, Route, Link} from 'react-router';
import Repos from './git_hub/repos';
import UserProfile from './git_hub/user_profile';
import Notes from './notes/notes';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      notes:[1,2,3],
      bio: {
        name: 'Anett Soos'
      },
      repos: ['a', 'b']
    }
  }
  render() {
    //console.log(this.props.params.username);
    //console.log(this.props.params);
    return (
      <div className="row">
          <div className="col-md-4">
            <p>User Profile Componetn</p>
            <UserProfile username={this.props.params.username} bio={this.state.bio}/>
          </div>
          <div className="col-md-4">
            <p>Repos</p>
            <Repos repos={this.state.repos}/>
          </div>
          <div className="col-md-4">
            <p>Notes</p>
            <Notes notes={this.state.notes}/>
          </div>
      </div>
    );
  }
};

export default Profile;