import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { LIST_SET_PAGE } from '../../actions/ActionTypes';

const propTypes = {

};
const defaultProps = {

};

class List extends Component {

  constructor(props) {
    super(props);

    this.getPage = this.getPage.bind(this);
  }

  componentWillMount() {
    this.props.setPage(this.props.location.pathname);
    console.log(this.props.location.pathname);
  }
  getPage () {
    const dropPage = (
      <h3 className="brand-logo">Today Drop</h3>
    );
    const letterPage = (
      <h3 className="brand-logo">Letter</h3>
    );
    const contactPage = (
      <h3 className="brand-logo">Contact</h3>
    );
    const errorPage = (
      <h3>Error...</h3>
    );

    switch (this.props.page) {
      case '/drop':
        return dropPage;
      case '/letter':
        return letterPage;
      case '/contact':
        return contactPage;
      default:
        return errorPage;
    }
  }

  render() {
    return(
      <div className="col s12 m9 l10">
        {this.getPage()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    page: state.list.page
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setPage: (page) => {
      dispatch({type:LIST_SET_PAGE, page});
    }
  };
};

List.propTypes = propTypes;
List.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(List);
