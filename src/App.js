import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './comps/ui/Navbar';
import UsersContainer from './comps/users/UsersContainer';
import User from './comps/users/User';
import SearchBar from './comps/users/SearchBar';
import Alert from './comps/ui/Alert';
import About from './comps/links/About';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    
    this.state = {
      users: [],
      user: {},
      loading: false,
      alert: null,
      repos: []
    }
  } 

  async componentDidMount() {
    this.setState({loading: true});

    const response = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({users: response.data, loading: false});
  }

  searchUsers = async text => {
    this.setState({loading: true});

    const response = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({users: response.data.items, loading: false});
  }

  getUser = async (user) => {
    this.setState({loading: true});

    const response = await axios.get(`https://api.github.com/users/${user}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({user: response.data, loading: false});
  }

  getRepos = async (user) => {
    this.setState({loading: true});

    const response = await axios.get(`https://api.github.com/users/${user}/repos?per_page=10&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({repos: response.data, loading: false});
  }

  setAlert = (msg) => {
    this.setState({alert: {msg: msg}});

    setTimeout(() => this.setState({alert: null}), 2250)
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert}/>
            <Switch>
              <Route exact path='/' render={props => (
                <React.Fragment>
                  <SearchBar searchUsers={this.searchUsers} setAlert={this.setAlert} />
                  <UsersContainer loading={this.state.loading} users={this.state.users} />
                </React.Fragment>
              )}
              />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' render={props => (
                <User {...props} getUser={this.getUser} getRepos={this.getRepos} user={this.state.user} repos={this.state.repos} loading={this.state.loading} />
              )} />
            </Switch>
          </div>
        </div>
      </Router>
    ); 
  }
}

export default App;
