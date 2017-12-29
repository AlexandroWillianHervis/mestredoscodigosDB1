import React, { Component } from 'react';
import logo from '../../assets/images/logodb1.png'

export default class Header extends Component {
    render() {
        return (
                <div className="header">
                    <div className="header__content">
                        <img src={logo} alt="logo" />
                        <h2>Welcome to first exercise to Master of codes from DB1!!!!!!</h2>
                    </div>
                    <p className="App-intro">
                        See all in
                        <a href="https://github.com/AlexandroWillianHervis/mestredoscodigosDB1">Github</a>
                    </p>
                </div>
        );
    }
}

