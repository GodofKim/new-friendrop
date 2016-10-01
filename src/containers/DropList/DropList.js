import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Drop from '../../components/Drop/Drop';

const propTypes = {

};
const defaultProps = {

};

class DropList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>DropList</div>
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

DropList.propTypes = propTypes;
DropList.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(DropList);
