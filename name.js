import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import App from './App';

export default class name extends React.Component{
        render(){    
            return(
                <div id="name">
                    First name:<input id="firstname"/>
                    <br/>
                    Second Name:<input id="surname"/>
                </div>
            );
        }
    }    