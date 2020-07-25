import React, { Component } from 'react';
import alertsDrawerImage from '../artwork/alerts_drawer_image.png';

import '../css/alerts_panel.css';

export default class AlertsPanel extends Component {
    render() {
        return (
            <div>
                <div onClick={() => this.props.close()} className={`black_overlay ${this.props.open ? 'open' : ''}`}></div>
                <div className={`alerts_panel ${this.props.open ? 'open' : ''}`}>
                    <div className="row">
                        <h2>Alerts</h2>
                        <div className="spacer"></div>
                        <span className="material-icons icon_button">settings</span>
                        <div style={{ width: '8px', }}></div>
                        <span onClick={() => this.props.close()} className="material-icons icon_button">close</span>
                    </div>
                    <hr />
                    <div className="center">
                        <p>You Don't have any alerts</p>
                    </div>
                </div>
            </div>
        )
    }
}
