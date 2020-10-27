import React from 'react';

class UserRepo extends React.Component {
  render() {
    return (
      <div className="card-user align-left">
        <h4>
          <a href={this.props.repo.html_url} target="_blank" rel="noopener noreferrer">{this.props.repo.name}</a>
        </h4>
      </div>
    )
  }
}

export default UserRepo;
