import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { DropList, LetterList, ContactList } from '../';
import { getListItemRequest } from '../../actions/list';

const propTypes = {

};
const defaultProps = {

};

class List extends Component {

  constructor(props) {
    super(props);

    this.state = {
      item: 'drop',
      loadingState: 'false'
    };

    this.getPage = this.getPage.bind(this);
  }

  componentWillMount() {
    let item;
    switch(this.props.location.pathname) {
      case '/drop':
        item = 'drop';
        break;
      case '/letter':
        item = 'letter';
        break;
      case '/contact':
        item = 'contact';
        break;
      default:
        item = 'drop';
    }

    this.setState({
      item
    });
  }

  componentDidMount() {
    let item = this.state.item;

    const loadUntilScrollable = () => {
      // iF THE SCROLLBAR DOES NOT EXIST,
      if($("body").height() < $(window).height()){
        this.loadOldItem().then(
          () => {
            // DO THIS RECURSIVELY UNLESS IT'S THE LAST PAGE
            if(!this.props[item].list.isLast){
              loadUntilScrollable();
            }
          }
        );
      }
    };
    // 아이템 요청 시작
    this.props.getListItemRequest(item, true).then(
      () => {
        console.log("componentDidMount", this.props.drop);
        //loadUntilScrollable();
      }
    );

    $(window).scroll(() => {
      // WHEN HEIGHT UNDER SCROLLBOTTOM IS LESS THEN 250
      if ($(document).height() - $(window).height() - $(window).scrollTop() < 250) {
        if(!this.state.loadingState){
          this.loadOldItem();
          this.setState({
            loadingState: true
          });
        }
      }
      else {
        if(this.state.loadingState){
          this.setState({
            loadingState: false
          });
        }
      }
    });
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

  loadNewItem() {
    let item = this.state.item;

    // CANCEL IF THERE IS A PENDING REQUEST
    if(this.props[item].list.listStatus === 'WAITING')
      return new Promise((resolve, reject) => {
        resolve();
      }); // 무슨 뜻이야 이건. 빈 프라미스 => 함수를 끝내는 return이랑 같은 의미인데
    //대신 호출자가 .then을 사용하기 위해 프라미스를 리턴한다.

    // IF PAGE IS EMPTY, DO THE INITIAL LOADING
    if(this.props[item].list.data.length === 0){
      return this.props.getListItemRequest(item, true);
    }

    return this.props.getListItemRequest(item, false, 'new', this.props[item].list.data[0]._id);
  }

  loadOldItem() {
    let item = this.state.item;

    // CANCEL IF USER IS READING THE LAST PAGE
    if(this.props.isLast){
      return new Promise(
        (resolve, reject) => {
          resolve();
        }
      );
    }

    // GET ID OF THE MEMO AT THE BOTTM
    let lastId = this.props[item].list.data[this.props[item].list.data.length-1]._id;

    // START REQUEST
    return this.props.getListItemRequest(item, false, 'old', lastId).then(() => {
      // IF IT IS LAST PAGE, NOTIFY
      if(this.props[item].list.isLast){
        Materialize.toast('You are reading the last page', 2000);
      }
    });
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
    drop: state.list.drop,
    letter: state.list.letter,
    contact: state.list.contact
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getListItemRequest: (item, isInitial, listType, id, username) => {
      return dispatch(getListItemRequest(item, isInitial, listType, id, username));
    }
  };
};

List.propTypes = propTypes;
List.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(List);
