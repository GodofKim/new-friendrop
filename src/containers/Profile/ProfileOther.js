import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { ProfileCard } from '../../components';
import { getProfileOtherRequest } from '../../actions/profile';

const propTypes = {

};
const defaultProps = {

};

class ProfileOther extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProfileOtherRequest(this.props.params.id);
  }

  render() {
    return(
      <div className="col s12 m9 l10">
        <ProfileCard profile={this.props.profile}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile.other.data
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getProfileOtherRequest: (id) => {
      return dispatch(getProfileOtherRequest(id));
    }
  };
};

ProfileOther.propTypes = propTypes;
ProfileOther.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(ProfileOther);
