import React, { Component } from 'react';
import './App.css';

class Careers extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <h3 className="major">Internship : BITNINE,</h3>
				<h4 className="major">2016.03 ~ 2016.09</h4>
                <p></p>
                <p>GRAPHIC DBMS 관련 문서 번역 및 UNIT TEST를 포함한 QA 업무
                </p>
                <br></br>
				<h3 className="major">Carrer : TELUS International AI KOREA, </h3>
				<h4 className="major">2018.08 ~</h4>
                <p></p>
                <p>BIXBY 캡슐 개발 및 일반 개발자 기술 지원 업무</p>
				<p>BIXBY TUTORIAL WEB PAGE fFRONT-END 개발 및 유지보수</p>
                <br></br>
            </div>
        );
    }
}

export default Careers;
