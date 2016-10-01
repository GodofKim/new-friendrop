import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/authentication';

class Logout extends Component {
  componentWillMount() {
    this.props.logout();
  }

  render() {
    return (
      <div>
        <h4>Good bye! See ya.</h4>
        <p> 광고광고 개광고 </p>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      return dispatch(logout());
    }
  };
};

export default connect(null, mapDispatchToProps)(Logout);
