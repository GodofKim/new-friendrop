import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Letter extends Component {
    render() {
        const letter = this.props.letter;
        const profilePath = `/profile/${letter.email}`;
        const date = {
            year: new Date(letter.date).getFullYear(),
            month: new Date(letter.date).getMonth(),
            date: new Date(letter.date).getDate()
        };

        return(
          <li className="card">
              <h4>{letter.nickname}</h4>
              <p>{letter.name}</p>
              <p>{letter.content}</p>
              <p>{date.year}-{date.month}-{date.date}</p>
              <Link className="btn btn-primary" to={profilePath}>프로필 보기</Link>
          </li>
        );
    }
}

Letter.defaultProps = {
    letter : {
        nickname: '없는 사용자입니다.'
    }
};

export default Letter;
