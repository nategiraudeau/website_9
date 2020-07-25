import React, { Component } from 'react'

import '../../css/dashboard.css';
import SideBar from './SideBar';
import { Redirect } from 'react-router-dom';

import userIcon from "../../artwork/user_icon-05.png";
import AlertsPanel from '../AlertsPanel';
import PanelTwoAndThree from './PanelTwoAndThree';

function later(delay) {
    return new Promise(function (resolve) {
        setTimeout(resolve, delay);
    });
}

export default class Dashboard extends Component {

    state = {
        toSignIn: false,
        transparent: false,
        showAlerts: false,
    }

    showAlerts() {
        this.setState({
            showAlerts: true,
        });
    }

    closeAlerts() {
        this.setState({
            showAlerts: false,
        });
    }

    async onLogOut() {
        this.setState({
            transparent: true,
        });
        await later(200);
        this.setState({
            transparent: false,
            toSignIn: true,
        });
    }

    render() {

        if (this.state.toSignIn) {
            this.setState({
                toSignIn: false,
            });
            return (
                <Redirect exact to='/signin' />
            )
        }

        return (
            <div style={{
                opacity: this.state.transparent ? 0 : 1,
                transition: 'opacity 0.2s',
            }} className="dashboard">
                <SideBar onLogOut={() => this.onLogOut()} />
                <div className="page_main">
                    <div className="panel p1">
                        <h1>Dashboard</h1>
                        <div className="spacer"></div>
                        <div className="icons">
                            <span onClick={() => this.showAlerts()} className="material-icons icon_button">notifications</span>
                            <div className="user_icon">
                                <img src={userIcon} alt="A user Icon" />
                            </div>
                        </div>
                    </div>
                    <PanelTwoAndThree />
                    <div className="row panel_4_5">
                        <div className="panel p4">
                            <h2 className="panel_title">Insights</h2>
                            <hr />
                            <div className="center">
                                <div>
                                    <b>Your Insights will appear here soon.</b>
                                    <p>In the meantime, you can create new custom insights to monitor your most important metrics. <a href="#">Learn more</a></p>
                                    <a data-primary href="#" className="btn">Create</a>
                                </div>
                            </div>
                        </div>
                        <div className="panel p5">
                            <div className="row" style={{ alignItems: "center", }}>
                                <h2 className="panel_title">Schedule</h2>
                                <div className="spacer"></div>
                                <span class="material-icons icon_button">add</span>
                            </div>
                            <hr />
                            <table style={{ width: '100%', }}>
                                <tr>
                                    <th>Event</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                </tr>
                                <tr>
                                    <td>Go to the store</td>
                                    <td>Tuesday</td>
                                    <td>8:30 AM</td>
                                </tr>
                                <tr>
                                    <td>Do something</td>
                                    <td>Friday</td>
                                    <td>12:00 PM</td>
                                </tr>
                                <tr>
                                    <td>Go to church</td>
                                    <td>Sunday</td>
                                    <td>11:00 AM</td>
                                </tr>
                                <tr>
                                    <td>Wake up</td>
                                    <td>Monday, October 11</td>
                                    <td>5:30 AM</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <footer>
                        <h1>Website 9</h1>
                    </footer>
                </div>
                <AlertsPanel close={() => this.closeAlerts()} open={this.state.showAlerts} />
            </div>
        )
    }
}
