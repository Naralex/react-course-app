import React, {Component} from 'react';
import {Promotions} from '../layouts'

//Lazy loading promotions

class Home extends Component {
    render() {
        return (
            <div className='root'>
                <main>
                    <Promotions/>
                </main>
            </div>
        );
    }
}

export default Home;