import React, { Component } from 'react';
import logo from '../../artwork/logo_dark.png';
import { Link } from 'react-router-dom';

import '../../css/side_bar.css';

export default class SideBar extends Component {

    state = {
        expanded: true,
    }

    changeExpanded() {
        this.setState({
            expanded: !this.state.expanded,
        });
    }

    render() {

        let expandButtonTransform = {
            transform: `rotateY(${this.state.expanded ? 180 : 0}deg)`,
        }

        return (
            <div>
                <div className={`side_bar_push ${this.state.expanded ? 'expanded' : ''}`}>
                </div>
                <div className="side_bar_wrapper">
                    <div className={`side_bar ${this.state.expanded ? 'extended' : ''}`}>
                        <div className="side_bar_content">
                            <div className="side_bar_logo">
                                <h1>Website</h1>
                                <img src={logo} alt="The amazing website 9 logo" />
                            </div>
                            <hr />

                            { /* Links */}
                            <a href="#" className="side_bar_link">
                                <span className="material-icons">dashboard</span>
                                <p>Dashboard</p>
                            </a>
                            <a href="#" className="side_bar_link">
                                <span className="material-icons">attach_money</span>
                                <p style={!this.state.expanded ? {} : { transitionDelay: '50ms' }}>Billing</p>
                            </a>
                            <a href="#" className="side_bar_link">
                                <span className="material-icons">person</span>
                                <p style={!this.state.expanded ? {} : { transitionDelay: '100ms' }}>Account</p>
                            </a>
                            <a href="#" className="side_bar_link">
                                <span className="material-icons">settings</span>
                                <p style={!this.state.expanded ? {} : { transitionDelay: '150ms' }}>Settings</p>
                            </a>

                            <hr />


                            <div style={{ cursor: "pointer", }} onClick={() => this.props.onLogOut()} className="side_bar_link">
                                <span className="material-icons">exit_to_app</span>
                                <p style={!this.state.expanded ? {} : { transitionDelay: '200ms' }}>Log Out</p>
                            </div>


                            <div onClick={(e) => this.changeExpanded()} className="side_bar_expand">
                                <hr />
                                <span className="material-icons" style={{ ...expandButtonTransform }}>
                                    arrow_forward_ios
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
