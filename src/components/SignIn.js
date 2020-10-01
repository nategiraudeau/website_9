import React, { Component } from 'react'
import '../css/sign_in.css'
import { Redirect } from 'react-router-dom';

// import { dbRoute } from '../App';

function later(delay) {
    return new Promise(function (resolve) {
        setTimeout(resolve, delay);
    });
}

export default class SignIn extends Component {

    state = {
        toDashboard: false,
        transparent: false,
    }

    async onSubmit(e) {
        e.preventDefault();
        this.setState({
            transparent: true,
        });
        await later(200);
        this.setState({
            transparent: false,
            toDashboard: true,
        });
    }

    render() {

        if (this.state.toDashboard) {
            this.setState({
                toDashboard: false,
            });
            return (
                <Redirect exact to='dashboard' />
            )
        }

        return (
            <div style={{
                opacity: this.state.transparent ? 0 : 1,
                transition: 'opacity 0.2s',
            }} className="sign_in_form">
                <h1>Sign In</h1>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <input required placeholder="Email" type="email" />
                    <input required placeholder="Password" type="password" />
                    <input type="submit" value="Sign In" />
                </form>
                <button onClick={(e) => this.onSubmit(e)} className="skip-signin">Skip</button>
            </div>
        )
    }
}
