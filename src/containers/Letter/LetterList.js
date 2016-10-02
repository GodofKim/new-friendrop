import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Letter from '../../components/Letter/Letter';

const propTypes = {

};
const defaultProps = {

};

class LetterList extends Component {

  shouldComponentUpdate(nextProps, nextState){
    return (JSON.stringify(this.props) !== JSON.stringify(nextProps));
  }

  render() {
    const mapToComponents = (letters) => {
      return letters.map((letter, i) => {
        return (
          <Letter letter={letter} key={letter._id} index={i} />
        );
      });
    };

    return(
      <div>
        {mapToComponents(this.props.data)}
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
