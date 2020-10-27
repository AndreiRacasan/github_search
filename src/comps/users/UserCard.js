import React from 'react';
import {Link} from 'react-router-dom';

class UserCard extends React.Component {
   render() {
    return (
      <div className="card">
        <img src={this.props.user.avatar_url} className="radius-img" alt="Profile" style={{width: 70}}/>
        <h3>{this.props.user.login}</h3>
        <div>
          <Link to={`/user/${this.props.user.login}`} className="btn btn-dark btn-small">Profile</Link>
        </div>
      </div>
    );
  }
}

export default UserCard;
