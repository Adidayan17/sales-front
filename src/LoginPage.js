import React from "react";
import axios from "axios";
import Cookies from "universal-cookie/es6";
import {Redirect} from "react-router";

class LoginPage extends React.Component {

    state = {
        username: "",
        password: "",
        success: false,
        redirectTo: "/"
    }
    usernameChange = (e) => {
        let username = e.target.value;
        this.setState({
            username: username
        })
    }
    passwordChange = (e) => {
        let password = e.target.value;
        this.setState({
            password: password
        })
    }

    signUp = () => {
        let data = new FormData();
        data.append("username", this.state.username)
        data.append("password", this.state.password)
        axios.post("http://127.0.0.1:8989/add-user", data)
            .then((response) => {
                if (response.data) {
                    alert("user created successfully")
                } else {
                    alert("username already exist !")
                }
            })
    }

    login = () => {
        axios.get("http://127.0.0.1:8989/log-in", {
            params: {
                username: this.state.username,
                password: this.state.password
            }
        }).then(response => {
            if (response.data) {
                this.setState({success: true});
                let cookies = new Cookies()
                cookies.set("token", response.data)
                axios.get("http://127.0.0.1:8989/if-first-log-in", {
                    params: {
                        token: response.data
                    }
                }).then(response1 => {
                    if (response1.data) {
                        this.setState({
                            redirect: "/HomePage"
                        })
                    } else {
                        this.setState({
                            redirect: "/SettingsPage"
                        })
                    }
                })

                window.location.reload();
            } else {
                alert("One or more details are wrong try again ")
            }
        })
    }

    render() {
        {
            if (this.state.success) return (<Redirect to={(this.state.redirectTo)}/>)
        }
        return (
            <div>
            <h1>Welcome </h1>
            <div className={"log-in-form"}>
                <div >
                    <p> Please Enter Valid Username :
                        <input type="text" onChange={this.usernameChange} placeholder="Enter username.."/></p>
                </div>
                <div>
                    <p> Please Enter Valid Password :
                        <input type="text" onChange={this.passwordChange} placeholder="Enter password.." minLength="6"/>
                    </p>
                </div>
                <button onClick={this.signUp} className={"sign-up"}>Sign Up
                </button>
                <p>
                    <button className={"sign-in"}
                            onClick={this.login}>Sign In
                    </button>
                </p>
            </div>
            </div>
        )

    }

}

export default LoginPage;

