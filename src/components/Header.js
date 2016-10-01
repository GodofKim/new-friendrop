import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {

};

const defaultProps = {
  isLoggedIn : false
};

class Header extends React.Component {

  constructor(props) {
      super(props);
  }

  renderBrand() {
    let route;

    if(this.props.authenticated)
    { route = '/drop'; }
    else
    { route = '/'; }

    return <Link to={route} className="brand-logo left">Friendrop</Link>;
  }
  render() {
    const loggedInMenu = [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/profile">프로필</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/drop">오늘의 드랍</Link>
        </li>,
        <li className="nav-item" key={3}>
          <Link className="nav-link" to="/letter">쪽지</Link>
        </li>,
        <li className="nav-item" key={4}>
          <Link className="nav-link" to="/contact">연락처</Link>
        </li>,
        <li className="nav-item" key={5}>
          <Link className="nav-link" to="/logout">로그아웃</Link>
        </li>
    ];
    const notLoggedInMenu = [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/login">로그인</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/signup">가입하기</Link>
        </li>
      ];

    return(
      <nav className="nav-wrapper blue darken-1">
        {this.renderBrand()}
        <ul className="right">
          { this.props.isLoggedIn ? loggedInMenu : notLoggedInMenu }
        </ul>
      </nav>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
