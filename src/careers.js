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
				<h3 className="major">Carrer : Lionbridge Korea, </h3>
				<h4 className="major">2018.08 ~</h4>
                <p></p>
                <p>BIXBY 캡슐 개발 및 유지보수</p>
				<p>BIXBY TUTORIAL WEB PAGE 개발 및 유지보수</p>
                <br></br>
                <h3 className="major">Study #1 : FAST CAMPUS,</h3>
				<h4 className="major">2014.08 ~ 2014.10</h4>
                <p>패스트캠퍼스에서 진행한 웹 프로그래밍 CAMP 1기 강좌를 수료. 이 강좌를 통해. Python(Django) + Bootstrap을 이용한 풀 스택(Server + Client) 게시판 프로젝트를 진행.</p>
                <h3 className="major">Study #2 : SEOULACCORD,</h3>
				<h4 className="major">2015.12 ~ 2016.01</h4>
                <p>Java와 JSP, 안드로이드 교육 수료</p>
                <br></br>
            </div>
        );
    }
}

export default Careers;
