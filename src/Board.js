import React, { Component } from 'react';
import './App.css';

class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            name: "default-name",
            title: "default-title",
            content: "default-content"
        }
        this.testAction = this.testAction.bind(this);
    }

    getPostList() {
        fetch("https://resumepost.herokuapp.com/post/list")
            .then(data => data.json())
            .then(data => {
                console.log(data);
                if (data.result !== "error") {
                    this.setState(
                        { posts: data.data }
                    )
                }
            })
            .catch(e => console.log(e))
    }

    writePost() {
        fetch('https://resumepost.herokuapp.com/post', {
            method: 'post',
            body: JSON.stringify({
                "name": this.state.name,
                "title": this.state.title,
                "content": this.state.content
            })
        }).then(data => data.json())
            .then(data => {
                console.log(data);
                this.getPostList();
            })
            .catch(e => console.log(e));
    }

    componentDidMount() {
        //this.writePost();
        this.getPostList();

        //아래추가 testbtn 이란 아이디한테 "click" 이벤트가 발생하면 
        //testAction함수를 실행하라는 것 

        document.getElementById("testbtn").addEventListener("click", this.testAction);

    }


    testAction() {
        var user_name = document.getElementById("name").value;
        var user_content = document.getElementById("message").value;

        if (user_name != null) {
            if (user_content != null) {
                this.setState(
                    {
                        name: user_name,
                        content: user_content
                    }, function () {
                        this.writePost();
                        console.log(document.getElementById("name").value);
                    }
                );
            }
        }

    }

    render() {
        return (
            <article id="board">
                <h2 className="major">Board</h2>
                <form method="post" action="#">
                    <div className="field">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="4"></textarea>
                    </div>
                    <ul className="actions">
                        <li id="testbtn"><a className="button special">Send Message</a></li>
                        <li><input type="reset" value="Reset" /></li>
                    </ul>
                </form>
                <br></br>
                <h3>List</h3>
                <div className="table-wrapper">
                    <table className="alt">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th colSpan="5">Content</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.posts.map(
                                    post => {
                                        return (
                                            <tr>
                                                <td>{post.name}</td>
                                                <td colSpan="5">{post.content}</td>
                                                <td>{post.createdAt.split("T")[0]}</td>
                                            </tr>
                                        )
                                    }
                                )
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="2"></td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

            </article>

        );
    }
}

export default Board;
