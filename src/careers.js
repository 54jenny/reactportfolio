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
                <h3 className="major">Internship : BITNINE, 2016.03 ~ 2016.09</h3>
                <p></p>
                <p>6학기를 마친 후 실무 경험을 쌓기 위해 (주)비트나인 그래프컨설팅팀에서 6개월간 인턴으로 근무했습니다. 주 업무는 DBMS Architectrue에 대한 전반적인 지식을 바탕으로 솔루션을 구성하는 것이었습니다.
                </p>
                <br></br>
                <h3 className="major">Study #1 : FAST CAMPUS, 2014.08 ~ 2014.10</h3>
                <p>패스트캠퍼스에서 진행한 웹 프로그래밍 CAMP 1기 강좌를 수료하였습니다. 이 강좌를 통해 Django와 웹 프론트엔드에 대해 기초적인 교육을 받았으며, Python과 HTML+JS+CSS에 대해 조금 알게 되었습니다. 수료 과제로는 Django + Bootstrap을 이용한 풀 스택 게시판 프로젝트를 진행하였습니다.</p>

                <h3 className="major">Study #2 : SEOULACCORD, 2015.12 ~ 2016.01</h3>
                <p>정부에서 지원하는 숭실대학교 서울어코드 동계 프로그래밍 집중교육을 1개월 동안 받았습니다. 이 수업에서 Java와 JSP, 안드로이드, DB에 대해 더 자세히 배울 수 있었습니다. 뿐만 아니라 현업에서 일하고 계신 강사님들의 실전 경험을 들으며 졸업 전에 인턴을 해보고 싶다는 생각을 하게 되었습니다.</p>
                <br></br>
            </div>
        );
    }
}

export default Careers;
