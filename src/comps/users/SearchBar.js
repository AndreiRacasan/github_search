import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      text: ''
    }
  }

  onSubmit = (event) => {
    event.preventDefault();

    if (this.state.text === '') {
      this.props.setAlert('At least one character is required');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({text: event.target.value});
    }

  }

  onChange = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input type="text" name="text" placeholder="Search for GitHub users..." value={this.state.text} onChange={this.onChange} className="input-search"/>
          <input type="submit" value='Search' className="btn btn-dark btn-search"/>
        </form>
      </div>
    );
  }
}

export default SearchBar;
