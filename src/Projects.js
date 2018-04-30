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
                <p>HTML5로 디자인 된 웹 페이지 템플릿을 React.js의 모듈화 구조로 변경하고, 내용을 수정해 이력서 웹사이트를 제작했습니다. 이 웹사이트는 Single Page Application으로 되어 있으며, Github의 Pages 기능을 이용하여 호스팅 했습니다. 게시판 메뉴에서 사용하는 기능은,  Node.js 서버를 Heroku에 호스팅하고 mongodb를 DBaaS 형태로 제공하는 mlab을 이용해 구현하여 연동하였습니다.</p>
                <h3>담당한 부분</h3>
                <p>Front-end / Back-end / Deploy 등 웹사이트 구축에 관련된 모든 부분을 담당하였습니다.</p>
                <br></br>
                <h3 className="major">2. Android Application</h3>
                <span className="image main"><img src={"images/pic02.jpg"} alt="" /></span>
                <p>교과목의 프로젝트가 아닌 교과목 외의 프로젝트를 진행해보고 싶어서 선배 한명과 함께 안드로이드 악필교정 어플리케이션을 제작했습니다. 사용자는 인터페이스 화면의 글씨 교본 위에 따라 쓸 수 있고 여러 번 연습하고 싶다면 썼던 글씨를 일일이 자신이 연습했던 흔적을 지울 필요 없이 한 번의 탭만으로 가능합니다. 사용자는 시험모드를 함으로써 제공 되는 글씨를 제한시간 안에 얼마나 정확하게 쓸 수 있는지를 테스트할 수 있고 또 캘리그라피를 따라 쓰는 메뉴도 추가하여 쉽게 배울 수 없는 캘리그라피도 연습할 수 있도록 합니다. 이 프로젝트는 2015년 숭실대학교 교내 소프트웨어 공모전에서 동상을 수상하였습니다. </p>
                <br></br>
                <h3><a href="https://youtu.be/N26Gxs2ixZc" target="_blank">시연 동영상</a></h3>
                <br></br>
                <h3>담당한 부분</h3>
                <p>이미지 리소스 작업과 디자인을 제외한 모든 기술적인 부분을 담당하였습니다. 이미지 리소스 위에 글자를 쓸 수 있는 커스텀 뷰를 구현하고, 사용자가 적은 글자와 이미지 리소스를 비교하여 일치율을 구하는 부분을 구현하였습니다. </p>
                <br></br>
                <h3 className="major">3. Arduino</h3>
                <p>컴퓨터를 전공한 이후 처음으로 진행해본 팀 프로젝트 입니다. 이 프로젝트는 아두이노 기반으로 만들어진 사용자가 원하는 방향으로 압력을 가하면 그 방향으로 나아가는 압력보드입니다. 바퀴는 전진, 후진, 좌회전, 우회전이 가능하고 스위치를 통해 정지 또한 가능합니다. 또한 각각의 압력센서에 가하는 압력의 세기를 조절하여 가속, 감속이 가능하고, 뒷부분을 열리게 하여 배터리 교체 용이하게 하였습니다. 이 프로젝트는 2013년 숭실대학교 창의적 공학설계 공모전에서 은상을 수상하였습니다.
                </p>
                <h3>담당한 부분</h3>
                <p>저는 아두이노에 연결된 압력센서와 바퀴의 모터 등을 아두이노와 연동하여 정상적으로 작동하는 코딩의 전체를 담당하였습니다.</p>
                <br></br>

                



            </div>
        );
    }
}

export default Projects;
