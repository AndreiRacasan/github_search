import React from 'react';
import spinner from './spinner.gif';

class Spinner extends React.Component {
  render() {
    return (
      <React.Fragment>
        <img src={spinner} alt="Spinning Spinner" style={{width: 100, margin: 'auto', display: 'block'}}/>
      </React.Fragment>
    );
  }
}

export default Spinner;
