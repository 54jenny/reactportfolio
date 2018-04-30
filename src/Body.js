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
		const menu = ["intro", "skills", "projects", "careers", "contact"];
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

	}
	workRender() {
		return (<p>
			<h3 class="major">1. 이력서 웹사이트</h3>
			<p>- React.js + Node.js + MongoDB(mlab) + Heroku</p>
			<br></br>
			<h3 class="major">2. 패스트캠퍼스 게시판 프로젝트</h3>
			<p>- Django + Bootstrap</p>
			<br></br>
			<h3 class="major">3. 교내 공모전</h3>
			<p>- Android</p>
			<br></br>
			<h3 class="major">4. 외부 강의 웹 프로젝트</h3>
			<p>- JSP + Servlet + JavaBeans</p>
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

					<Contact />

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
