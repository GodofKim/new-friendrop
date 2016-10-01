import React, { Component, PropTypes } from 'react';

const propTypes = {

};

const defaultProps = {

};

class HomeContent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
          <div>
            <h1 className="logo">Friendrop</h1>
            <h4>친구 폭격을 준비하십쇼!</h4>
          </div>
        );
    }
}

HomeContent.propTypes = propTypes;
HomeContent.defaultProps = defaultProps;

export default HomeContent;
