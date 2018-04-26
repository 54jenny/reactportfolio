import React, { Component } from 'react';
import './App.css';

class MultipleContents extends Component {

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
                {/* <h2 className="major">{this.props.title}</h2>
                <span className="image main"><img src={"images/"+this.props.imgName} alt="" /></span> */}

                {this.props.index.map(i => {
                    return (
                    <span>
                        <h2 className="major">{this.props.titles[i]}</h2>
                        <span className="image main"><img src={"images/"+this.props.images[i]} alt="" /></span>
                        { this.props.contents[i] }
                    </span>
                    )
                })}
            </article>
        );
    }
}

export default MultipleContents;
