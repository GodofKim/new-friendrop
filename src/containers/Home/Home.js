import React, { Component, PropTypes } from 'react';
import { HomeContent } from '../../components';

const propTypes = {

};

const defaultProps = {

};

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
              <HomeContent />
            </div>
        );
    }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
