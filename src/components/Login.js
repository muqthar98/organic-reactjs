import React, { Component } from 'react'
import firebase from './firebase'

export default class Login extends Component {
    
    render() {
        return (
            <div>
                <div id="recaptcha-container"/>
              <label></label>
              <button className="btn btn-md btn-primary">Click Me</button>
            </div>
        )
    }
}
