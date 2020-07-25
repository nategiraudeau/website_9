import React, { Component } from 'react'
import '../css/title.css';


export default class Title extends Component {
    render() {
        return (
            <div className="title_page">
                <div className="title_page_inner">
                    <h1>Website 9</h1>
                    <p>This is the 9th amazing website that I have made. It's open-source and you can find it on <a href="https://github.com/NateGiraudeau/website_9">GitHub</a>.</p>
                </div>
            </div>
        )
    }
}
