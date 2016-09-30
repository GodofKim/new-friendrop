import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { DropList, LetterList, ContactList } from '../';

const propTypes = {

};
const defaultProps = {

};

class List extends Component {

  constructor(props) {
    super(props);

    this.getPage = this.getPage.bind(this);
  }


  getPage () {
    const dropPage = (
      <div>
        <h3 className="brand-logo">Today Drop</h3>
        <DropList />
      </div>
    );
    const letterPage = (
      <div>
        <h3 className="brand-logo">Letter</h3>
        <LetterList />
      </div>
    );
    const contactPage = (
      <div>
        <h3 className="brand-logo">Contact</h3>
        <ContactList />
      </div>
    );
    const errorPage = (
      <h3>Error...</h3>
    );

    switch (this.props.location.pathname) {
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
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
  };
};

List.propTypes = propTypes;
List.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(List);
