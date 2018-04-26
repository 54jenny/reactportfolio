import React, { Component } from 'react';
import './App.css';

class SimpleContents extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <article id={this.props.articleId}>
                <h2 className="major">{this.props.title}</h2>
                {/* <span className="image main"><img src={"images/"+this.props.imgName} alt="" /></span> */}
                {
                    this.props.children
                }
            </article>
        );
    }
}

export default SimpleContents;
