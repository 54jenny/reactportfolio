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
                        <h1>Dimension</h1>
                        <p>A fully responsive site template designed by <a href="https://html5up.net">HTML5 UP</a> and released<br />
                            for free under the <a href="https://html5up.net/license">Creative Commons</a> license.</p>
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
