import React from 'react';
import {Router, Route, Link} from 'react-router';
import Repos from './git_hub/repos';
import UserProfile from './git_hub/user_profile';


class HelloTest extends React.Component {
  render(){
    return (
      <h2>{this.props.txt}</h2>
      );
  }
}

class Profile extends React.Component {
  render(){
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username}  />
        </div>
        <div className="col-md-4">
          Repos
        </div>
        <div className="col-md-4">
         Notes
        </div>
      </div>
    );
  }
}

export default Profile;

