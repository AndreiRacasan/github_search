import React from 'react';
import UserRepo from './UserRepo'

class ReposContainer extends React.Component {
  render() {
    return this.props.repos.map(repo => <UserRepo repo={repo} key={repo.id}  />)
  }
}

export default ReposContainer;
