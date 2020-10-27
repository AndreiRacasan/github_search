import React from 'react';

class Alert extends React.Component {
  render() {
    return (
        this.props.alert !== null && (
          <div className={`alert alert-${this.props.alert.type}`}>
            <i className="fas fa-info-circle" /> {this.props.alert.msg}
          </div>
        )
    );
  }
}

export default Alert;
