import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Contact extends Component {
    render() {
        const contact = this.props.contact;
        const profilePath = `/profile/${contact.email}`;
        const date = {
            year: new Date(contact.date).getFullYear(),
            month: new Date(contact.date).getMonth(),
            date: new Date(contact.date).getDate()
        };

        return(
          <li className="card">
              <h4>{contact.nickname}</h4>
              <p>{contact.name}</p>
              <p>{contact.phone}</p>
              <p>{date.year}-{date.month}-{date.date}</p>
              <Link className="btn btn-primary" to={profilePath}>프로필 보기</Link>
          </li>
        );
    }
}

Contact.defaultProps = {
    contact : {
        nickname: '없는 사용자입니다.'
    }
};

export default Contact;
