import React from 'react';
import Spinner from '../ui/Spinner';
import ReposContainer from '../repos/ReposContainer';
import {Link} from 'react-router-dom';

class User extends React.Component {

  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getRepos(this.props.match.params.login);
  }

  render() {
    // Destructuring all used info from this props user for simplicity
    const {
      name,
      company,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      hireable
    } = this.props.user;

    if (this.props.loading) {
      return <Spinner />
    }

    return (
      <React.Fragment className>
      <div className="user-top-bar">
        <Link to='/' className='btn btn-light'>Back to Results</Link>
          <div>
            Open to Work: {' '}
            {hireable ? <i className="fas fa-check" /> : <i className="fas fa-times-circle" />}
          </div>
        </div>
        <div className="card-user grid">
          <div className="all-center">
            <img src={avatar_url} className="radius-img" alt="Profile" style={{width: 150}}/>
            <h1>{name}</h1>
            <p>{location && <React.Fragment>
                  <b>Location:</b> {location}
                </React.Fragment>}</p>
          </div>
          <div className="vertical-align">
            {bio && <React.Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </React.Fragment>}
            <ul>
              <li>
                {<React.Fragment>
                  <b>Username:</b> {login}
                </React.Fragment>}
              </li>
              <li>
                {company && <React.Fragment>
                  <b>Company:</b> {company}
                </React.Fragment>}
              </li>
              <li>
                {blog && <React.Fragment>
                  <b>Website:</b> {blog}
                </React.Fragment>}
              </li>
              <a href={html_url} className="btn btn-primary" style={{width: 250, alignSelf: 'center', marginTop: 8}} target="_blank" rel="noopener noreferrer">Visit Github Profile</a>
            </ul>
          </div>
        </div>

        <div className="card-badge bg-primary">
          <div className="info card-user-btns">Followers: {followers}</div>
          <div className="info card-user-btns">Following: {following}</div>
          <div className="info card-user-btns">Repos: {public_repos}</div>
        </div>

        <div className="repos-container">            
        <ReposContainer repos={this.props.repos} />
        </div>
      </React.Fragment>
    );
  }
}

export default User;
