import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Drop extends Component {
  render() {
    const drop = this.props.drop;
    const profilePath = `/profile/${drop.profileId}`;
    const date = {
      year: new Date(drop.date).getFullYear(),
      month: new Date(drop.date).getMonth(),
      date: new Date(drop.date).getDate()
    };

    return(
      <li className="card-panel">
        <h4>{drop.nickname}</h4>
        <p>{drop.name}</p>
        <p>{drop.gender}</p>
        <p>{drop.school} {drop.major}</p>
        <p>{date.year}-{date.month}-{date.date}</p>
        <Link className="btn btn-primary" to={profilePath}>프로필 보기</Link>
      </li>
    );
  }
}

Drop.defaultProps = {
  drop : {
    nickname: '없는 사용자입니다.'
  }
};

export default Drop;
