import React, { Component } from 'react';
import './App.css';

class Intro extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <h3 className="major">profile</h3>
                <p><b>이재은</b></p>
                <p>jjeun19@gmail.com</p>
                <p>정발고등학교 졸업 (2010.03 ~ 2013.02)</p>
                <p>숭실대학교 컴퓨터학부 졸업 (2013.03 ~ 2019.02)</p>
                <br></br>
            </div>
        );
    }
}

export default Intro;
