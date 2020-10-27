import React from 'react';

class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>About GitHub Search</h1>
        <p>A simple React app that makes use of the GitHub API to search user profiles and fetch data. It returns up to 30 users matching the input string in a grid format. Clicking on the profile button takes the user to a custom made page showing more information about the GitHub user.</p>
        <br/>
        <p>Built with React, Axios, HTML, CSS, JavaScript, React Router, GitHub API V4.</p>
        
      </React.Fragment>
    );
  }
}

export default About;
