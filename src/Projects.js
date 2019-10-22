import React, { Component } from 'react';
import './App.css';

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <h3 className="major">1. react resume web site</h3>
                <span className="image main"><img src={"images/pic01.png"} alt="" /></span>
                <p>HTML5로 디자인 된 웹 페이지 템플릿을 React.js의 모듈화 구조로 변경하고, 내용을 수정해 이력서 웹사이트를 제작. 이 웹사이트는 SPA(Single Page Application)으로 되어 있으며, Github의 Pages 기능을 이용하였고, 게시판 메뉴에서 사용하는 서버 기능은,  Node.js 서버를 Heroku에 호스팅하고 mongodb를 DBaaS 형태로 제공하는 mlab을 이용해 구현.</p>
                <br></br>
				<h3 className="major">2. Bixby</h3>
                <p>삼성 음성인식 소프트웨어 생태계인Bixby Capsule 개발 프로젝트. 한 개 Capsule에 대해 주 개발 및 유지보수를 담당함. JS와 Bixby 자체 Language를 가지고 구현. 개발 후 자체 테스트와 주기적으로 진행되는 검증에서 발생한 이슈를 파악하고 해결. 또한 Concept이 변경되거나 추가될 때, Mobile, Speaker, Watch 등 Target 추가될 때 클라이언트의 요구사항이나 개발 가이드에 맞게 개발하여 상용화를 주도. 추가적으로, Bixby 일반 개발자들의 기술 질문에 응대하는 Tech Support 프로젝트에도 참여함.</p>
                <br></br>
                <h3 className="major">3. Android Application</h3>
                <span className="image main"><img src={"images/pic02.jpg"} alt="" /></span>
                <p>사용자는 인터페이스 화면의 글씨 교본 위에 따라 쓸 수 있고, 얼마나 잘 따라 썼는지 알려주는 어플리케이션. 사용자는 시험모드를 함으로써 제공되는 글씨를 제한시간 안에 얼마나 정확하게 쓸 수 있는지를 테스트할 수 있고 또 기존에 준비되어 있는 캘리그라피를 따라 쓰는 기능도 존재. 2015년 숭실대학교 소프트웨어 공모전 동상 수상.</p>
                <br></br>
                <h3><a href="https://youtu.be/N26Gxs2ixZc" target="_blank">시연 동영상</a></h3>
                <br></br>
                <h3 className="major">4. Arduino</h3>
                <p>아두이노 기반으로 만들어진 사용자가 원하는 방향으로 압력을 가하면 그 방향으로 나아가는 디바이스 솔루션. 바퀴는 전진, 후진, 좌회전, 우회전이 가능하고 스위치를 통해 정지 가능. 또한 각각의 압력센서에 가하는 압력의 세기를 조절하여 가속, 감속이 가능하고, 뒷부분을 열리게 하여 배터리 교체가능. 2013년 숭실대학교 창의적 공학설계 공모전에서 은상 수상.
                </p>
                <br></br>

                



            </div>
        );
    }
}

export default Projects;
