import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Intro from './Intro';
import Contact from './Contact';
import SimpleContents from './SimpleContents';
import MultipleContents from './MultipleContents';
import Elements from './Elements';
import Projects from './Projects';
import Careers from './careers';

class Body extends Component {

	constructor(props) {
		super(props);
		const menu = ["intro", "skills", "projects", "careers", "elements"];
		const projects = [0, 1];
		const projectsTitle = ["Android", "Resume"];
		const projectsContent = ["android is good", "resume is good"]
		const projectsImage = ["pic02.jpg", "pic02.jpg"]

		this.state = {
			links: menu,
			projects: [0, 1],
			projectsTitle: ["Android", "Resume"],
			projectsContent: [
				"android is good",
				"resume is good"
			],
			projectsImage: ["pic02.jpg", "pic02.jpg"]
		};


	}

	componentDidMount() {

		// fetch("http://localhost:3001/users/androidproject")
		// .then(data=>data.json())
		// .then(data=>{
		// 	var projectsContent = this.state.projectsContent;
		// 	projectsContent[0] = data.content;
		// 	this.setState({projectsContent : projectsContent})
		// })
	}
	workRender() {
		return (<p>
			<h3 class="major">1. Django / Bootstrap</h3>
			<p>- Django와 Bootstrap을 이용한 풀스택 게시판 프로젝트 진행</p>
			<br></br>
			<h3 class="major">2. Android</h3>
			<p>- Android App을 제작하여 교내 공모전에서 입상</p>
			<br></br>
			<h3 class="major">3. JSP, Servlet, JavaBeans</h3>
			<p>- 웹 프로그래밍 수업 과제로 JSP, 서블릿, 자바 빈즈를 사용한 회원가입 기능과 영화 예매 기능이 있는 간단한 영화 예매 사이트를 구현</p>
			<br></br>
			<h3 class="major">4, React + Node.js</h3>
			<p>- React와 node.js를 이용한 이력서 웹사이트 구축</p>
			<br></br>
		</p>
		)
	}
	render() {
		return (
			<div id="wrapper">

				<Header links={this.state.links} />

				<div id="main">

					<SimpleContents articleId={this.state.links[0]} imgName={"pic01.jpg"} title={"INTRO"}>
						<Intro />
					</SimpleContents>


					<SimpleContents articleId={this.state.links[1]} imgName={"pic02.jpg"} title={"SKILLS"}>
						{this.workRender()}
					</SimpleContents>

					<SimpleContents articleId={this.state.links[2]} imgName={"pic03.jpg"} title={"PROJECTS"}>
						<Projects />
					</SimpleContents>

					<SimpleContents articleId={this.state.links[3]} imgName={"pic04.jpg"} title={"CAREERS"}>
						<Careers />
					</SimpleContents>

					{/* 
					 <MultipleContents articleId={this.state.links[2]} images={this.state.projectsImage} 
					 					index={this.state.projects} titles={this.state.projectsTitle} contents={this.state.projectsContent} /> */}




					<Elements />
				</div>

				{/* <!-- Footer --> */}
				<footer id="footer">
					<p className="copyright">&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>. react로 바꿈: 이재은</p>
				</footer>

			</div>

		);
	}
}

export default Body;
