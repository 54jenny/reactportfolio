import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Intro from './Intro';
import Contact from './Contact';
import SimpleContents from './SimpleContents';

class Body extends Component {

	constructor(props) {
		super(props);
		const menu = ["intro", "work", "about", "contact"];

		this.state = {
			links: menu
		}


	}

	componentDidMount() {
	}
	workRender() {
		return (<p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
			Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>)
	}
	render() {
		return (
			<div id="wrapper">

				<Header links={this.state.links} />

				<div id="main">

					<SimpleContents articleId={"intro"} imgName={"pic01.jpg"} title={"INTRO"}>
						<Intro />
					</SimpleContents>

					{/* <!-- Work --> */}
					<SimpleContents articleId={"work"} imgName={"pic02.jpg"} title={"WORK"}>
						{ this.workRender() }
					</SimpleContents>

					{/* <!-- About --> */}
					<SimpleContents articleId={"about"} imgName={"pic03.jpg"} title={"ABOUT"}>
						<p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
					</SimpleContents>

					<Contact />

					{/* <!-- Elements --> 
						<Elements />*/}
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
