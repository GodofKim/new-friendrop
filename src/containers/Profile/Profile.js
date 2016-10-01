import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { ProfileCard } from '../../components';
import { getProfileRequest } from '../../actions/profile';

const propTypes = {

};
const defaultProps = {

};

class Profile extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProfileRequest();
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
    profile: state.profile.data
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getProfileRequest: () => {
      return dispatch(getProfileRequest());
    }
  };
};

Profile.propTypes = propTypes;
Profile.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
