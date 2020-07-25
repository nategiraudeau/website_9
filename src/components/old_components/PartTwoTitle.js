import React, { Component } from 'react'
import ScrollTrigger from 'react-scroll-trigger';

export default class PartTwoTitle extends Component {

    state = {
        visible: false,
    };

    onEnterViewport() {
        this.setState({
            visible: true,
        });
    }

    onExitViewport() {
        this.setState({
            visible: false,
        });
    }

    render() {
        return (
            <ScrollTrigger onEnter={() => this.onEnterViewport()} onExit={() => this.onExitViewport()}>
                <h1 style={{
                    opacity: this.state.visible ? 1 : 0,
                    transform: this.state.visible ? 'none' : 'translateY(200px)',
                    transition: (this.state.visible ? 0.6 : 0.0) + 's cubic-bezier(0, 0.5, 0, 1)',
                    transitionDelay: (this.state.visible ? 0.2 : 0.0) + 's',
                }} className="title_text">Amazing!</h1>
            </ScrollTrigger>
        )
    }
}
