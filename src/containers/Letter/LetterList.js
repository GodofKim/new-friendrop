import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Letter } from '../../components';

const propTypes = {

};
const defaultProps = {

};

class LetterList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Letter />
      </div>
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

LetterList.propTypes = propTypes;
LetterList.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(LetterList);
