import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

const propTypes = {

};
const defaultProps = {

};

class ContactList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>ContactList</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  };
};
const mapDispatchToProps = (dispatch) => {
  return {

  };
};

ContactList.propTypes = propTypes;
ContactList.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
