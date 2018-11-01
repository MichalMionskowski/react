import React, { Component } from 'react';
import './App.css';
import Name from './name';
import Address from './address';

export default class personalInfo extends React.Component{
        render(){    
        return(
            <div id="perinf">
                <Name id="pname"/>
                
                <br/>
                <br/>
                <Address id="padd"/>
            </div>
        );
        }
    }    