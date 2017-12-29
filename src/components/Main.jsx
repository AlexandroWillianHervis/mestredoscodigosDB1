import React, { Component } from 'react';
import Header from './header/Header'
import Content from './content/Content'

export default class Main extends Component {
    render() {
        return (
            <div>
                <div>
                    <Header/>
                </div>
                <div>
                    <Content/>
                </div>
            </div>
        );
    }
}

