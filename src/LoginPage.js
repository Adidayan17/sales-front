import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Cookies from "universal-cookie/es6";
import {Redirect} from "react-router";

class LoginPage extends React.Component {

    state = {
        username: "",
        password: "",
        success:false
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
    validatePhone(username) {
        const regex = /^(?=.*[A-Za-z])[A-Za-z\d]{}$/;
        if(!regex.test(username)){
            alert("Invalid username");
        }
        return regex.test(username);

    }
    validatePassword(password) {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if (!regex.test(password)){
            alert("Invalid password");

        }
        return regex.test(password);
    }



    render() {

        return (
            <div style={{textAlign:"center"}}>
                <h1 style={{color: "black"}}>Welcome </h1>
                <div>
                    <p> Please Enter Valid Username :
                        <input type="text" onChange={this.usernameChange} placeholder="Enter username.."/></p>
                </div>
                <div>
                    <p> Please Enter Valid Password (A-Z-123...) :
                        <input type="text" onChange={this.passwordChange} placeholder="Enter password.." minLength="6"/>
                    </p>
                </div>
                <button onClick={this.signUp} style={{background: "pink", width: "150px", height: "50px"}}>Sign Up
                </button>
                <p>
                    <button style={{background: "magenta", width: "150px", height: "50px"}}
                            onClick={this.login}>Sign in
                    </button>
                </p>
            </div>
        )

    }

}
export default LoginPage;
