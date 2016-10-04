import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Drop from '../../components/Drop/Drop';

const propTypes = {

};
const defaultProps = {

};

class DropList extends Component {

  shouldComponentUpdate(nextProps, nextState){
    return (JSON.stringify(this.props) !== JSON.stringify(nextProps));
  }

  render() {
    const mapToComponents = (drops) => {
      return drops.map((drop, i) => {
        return (
          <Drop drop={drop} key={drop._id} index={i} />
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

DropList.propTypes = propTypes;
DropList.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(DropList);
