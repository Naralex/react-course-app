import React, {Component, Fragment} from 'react';
import {Promotions} from '../layouts'

//Lazy loading promotions

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Promotions/>
            </Fragment>
        );
    }
}

export default Home;