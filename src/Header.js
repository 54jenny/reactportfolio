import React, { Component } from 'react';
import './App.css';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    }

    render() {
        return (

            <header id="header">
                <div className="logo">
                    <span className="icon fa-diamond"></span>
                </div>
                <div className="content">
                    <div className="inner">
                        <h1>이재은</h1>
                        <p>I want to be a good programmer.</p>
                    </div>
                </div>
                <nav>
                    <ul>
                        { this.props.links.map((link) => {
                            return (<li key={link}><a href={"#"+link}>{link}</a></li>)
                        }) }




                        
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
