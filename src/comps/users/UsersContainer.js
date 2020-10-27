import React from 'react';
import UserCard from './UserCard';
import Spinner from '../ui/Spinner'

class UsersContainer extends React.Component {
  render() {
    if(this.props.loading) {
      return <Spinner />;
    } else {
      return (
        <div style={userStyle}>
          {this.props.users.map(u => (
            <UserCard key={u.id} user={u} />
          ))}
        </div>
      );
    }
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr) )',
  gridGap: '1rem'
}

export default UsersContainer;
