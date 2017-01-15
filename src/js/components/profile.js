import React from 'react';
import {Router, Route, Link} from 'react-router';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      notes:[],
      bio:{},
      repos: []
    }
  }
  render() {  
    return (
      <div className="row">
          <div className="col-md-4">
         // user profile component --> {this.props.params.username}
          //<DisplayRepos ChildRepos={this.state.repos} />
          <p>User Profile Componetn</p>
           </div>
          <div className="col-md-4">
          <p>Repos</p>
          </div>
          <div className="col-md-4">
          <p>Notes</p>
          </div>
      </div>
    );
  }
};

export default Profile;