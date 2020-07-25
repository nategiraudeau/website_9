import React, { Component } from 'react'
import Line from '../charts/LineChart'

import '../../css/circular_progress.css';

export default class PanelTwoAndThree extends Component {
    render() {
        return (
            <div className="row panel_2_3">
                <div className="panel p2">
                    <h3>Money</h3>
                    <hr />
                    <Line />
                </div>
                <div className="panel p3">
                    <div className="panel_column">
                        <div className="sub_panel blue_panel">
                            <div className="circle_progress" style={{ width: "160px", height: "160px", transform: 'scale(0.8) rotate(20deg)', }}>
                                <div className="circle_progress">
                                    <p>26%</p>
                                </div>
                            </div>
                            <div style={{ height: '2px', }}></div>
                            <h2>Progress</h2>
                            <div style={{ height: '12px', }}></div>
                        </div>
                        <div style={{ flex: 50 + 'px' }}></div>
                        <div className="sub_panel conversions">
                            <h4>Conversions<span className="number_indicator">0</span></h4>
                            <hr />
                            <div>
                                <div>
                                    <p>Your most important events are conversions. Mark your top events as conversions to enable real-time uploads and attribution reporting.</p>
                                    <div style={{ height: '8px', }}></div>
                                    <a href="#">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
