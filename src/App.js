import './App.css';
import React from "react";
import LoginPage from "./LoginPage"
import HomePage from "./HomePage"
import {Redirect, Route} from "react-router";
import SettingsPage from "./SettingsPage"
import DashboardPage from "./DashboardPage"
import ShopListPage from "./ShopsListPage"
import SearchPage from "./SearchPage"
import {BrowserRouter} from "react-router-dom";
import Cookies from "universal-cookie/es6";
import NavigationBar from "./NavigationBar";
import StorePage from "./StorePage";
import axios from "axios";

//
// let ALERT_TITLE = "New Notification";
//
// let ALERT_BUTTON_TEXT = "✔ Thanks";
//
// if (document.getElementById) {
//
//     window.alert = function (txt) {
//
//         createCustomAlert(txt);
//     }
// }
// function createCustomAlert(txt) {
//    let d = document;
//     if (d.getElementById("modalContainer")) return;
//    let mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
//     mObj.id = "modalContainer";
//     mObj.style.height = d.documentElement.scrollHeight + "px";
//    let alertObj = mObj.appendChild(d.createElement("div"));
//     alertObj.id = "alertBox";
//     if (d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
//     alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth) / 2 + "px";
//     alertObj.style.visiblity = "visible";
//    let h3 = alertObj.appendChild(d.createElement("h3"));
//     h3.appendChild(d.createTextNode(ALERT_TITLE));
//   let  msg = alertObj.appendChild(d.createElement("p"));
//     msg.innerHTML = txt;
//    let btn = alertObj.appendChild(d.createElement("a"));
//     btn.id = "closeBtn";
//     btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
//     btn.href = "#";
//     btn.focus();
//     btn.onclick = function () { removeCustomAlert(); return false; }
//     alertObj.style.display = "block";
// }
// function removeCustomAlert() {
//    document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
// }

class App extends React.Component {
    state = {
        loggedIn :false,
        textFromWebSocket:"",
        sOe:"",
        firstLogIn :""
    }
    componentDidMount() {

        const cookies = new Cookies();
        let token = cookies.get("token");
        this.setState({token: token});
        const ws = new WebSocket("ws://localhost:8989/stream?token="+token);
        ws.onmessage = (message) => {
            const data = JSON.parse(message.data);
            this.setState({textFromWebSocket:data.saleText, sOe:data.sOe});
        }
        if (cookies.get("token") && cookies.get("token").length > 0) {
            this.setState({loggedIn: true})
             {
                axios.get("http://127.0.0.1:8989/if-first-log-in", {
                    params: {
                        token: token
                    }
                }).then(response => {
                    if (response.data) {
                        this.setState({
                            firstLogIn: 0
                        })
                        let data =new FormData();
                        data.append("token",token)
                        axios.post("http://127.0.0.1:8989/inc_first_log_in",data)
                            .then((response)=>{

                            })

                    } else {
                        this.setState({
                            firstLogIn: 1
                        })

                    }
                })
            }
        }
    }


    render() {
        return (
            <div className="App">

                <BrowserRouter>
                    {this.state.loggedIn ?
                        <div>
                        {this.state.firstLogIn==0 ? <div><NavigationBar/>
                                <Redirect to={"/SettingsPage"}/>
                                <Route path={"/HomePage"} component={HomePage}/>
                                <Route path={"/SettingsPage"} component={SettingsPage}/>
                                <Route path={"/DashboardPage"} component={DashboardPage}/>
                                <Route path={"/ShopsListPage"} component={ShopListPage}/>
                                <Route path={"/SearchPage"} component={SearchPage}/>
                                <Route path={"/store/:id"} component={StorePage}/>
                        </div>:
                            <div>
                            <NavigationBar/>
                            <Redirect to={"/HomePage"}/>
                            <Route path={"/HomePage"} component={HomePage}/>
                            <Route path={"/SettingsPage"} component={SettingsPage}/>
                            <Route path={"/DashboardPage"} component={DashboardPage}/>
                            <Route path={"/ShopsListPage"} component={ShopListPage}/>
                            <Route path={"/SearchPage"} component={SearchPage}/>
                            <Route path={"/store/:id"} component={StorePage}/>
                        </div>
                        }


                        </div>:
                        <div>
                            <Route path={"/"} component={LoginPage}/>
                        </div>
                    }
            </BrowserRouter>
                <div style={{marginBottom:"25%"}}>
                    {this.state.textFromWebSocket.length>0 && alert("Hello you have a sale to look at "+this.state.textFromWebSocket+"\n this sale is "+this.state.sOe)}
                </div>
                <p className={"credit"}>This project made by Amit & Adi Dayan & Barak Bitan</p>
        </div>
    );

}
}
export default App;
