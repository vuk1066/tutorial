import React from 'react';

class UserProfile extends React.Component {
    render() {
    return (
	  <div>
		<h2>USER PROFILE</h2>
		<p>Username: {this.props.username}</p>
		
      </div>
    );
	}
}

export default UserProfile;