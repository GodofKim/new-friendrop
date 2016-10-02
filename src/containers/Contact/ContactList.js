import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Contact from '../../components/Contact/Contact';

const propTypes = {

};
const defaultProps = {

};

class ContactList extends Component {

  shouldComponentUpdate(nextProps, nextState){
    return (JSON.stringify(this.props) !== JSON.stringify(nextProps));
  }

  render() {
    const mapToComponents = (contacts) => {
      return contacts.map((contact, i) => {
        return (
          <Contact contact={contact} key={contact._id} index={i} />
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

ContactList.propTypes = propTypes;
ContactList.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
