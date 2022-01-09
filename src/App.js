import './App.css';
import React from "react";
import LoginPage from "./LoginPage"
import HomePage from "./HomePage"
import SettingsPage from "./SettingsPage"
import DashboardPage from "./DashboardPage"
import ShopListPage from "./ShopsListPage"
import SearchPage from "./SearchPage"
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router";
import Cookies from "universal-cookie/es6";
import NavigationBar from "./NavigationBar";
import StorePage from "./StorePage";
import axios from "axios";


class App extends React.Component {
    state = {
        loggedIn :false,
        textFromWebSocket:"",
        firstLogIn :""
    }
    componentDidMount() {
        const cookies = new Cookies();
        let token = cookies.get("token");
        this.setState({token:token});
        const ws = new WebSocket("ws://localhost:8989/stream?token=" + token);
        ws.onmessage = (message) => {

            const data = JSON.parse(message.data);
            this.setState({textFromWebSocket: data.saleText});
        }

        if (cookies.get("token") && cookies.get("token").length > 0) {
            this.setState({loggedIn: true});
            axios.get("http://127.0.0.1:8989/if-first-log-in",{
                params:{
                    token:token
                }
            }).then(response=>{

                if(response.data){
                    console.log("first log in "+response.data+" now")
                    this.setState({
                        firstLogIn:0

                    })
                    console.log("state "+this.state.firstLogIn)
                }
                else {
                    console.log("first log in "+response.data+" now")
                    this.setState({
                        firstLogIn:1
                    })
                    console.log("state "+this.state.firstLogIn)

                }
            })        }
    }
 checkFirst=()=>{



        }


    render() {
        return (

            <div className="App">
                <BrowserRouter>
                    {this.state.loggedIn ?

                        <div>

                        {this.state.firstLogIn ==0 ? <div><NavigationBar/>
                                <Route path={"/"} component={SettingsPage}/>
                                <Route path={"/HomePage"} component={HomePage}/>
                                <Route path={"/SettingsPage"} component={SettingsPage}/>
                                <Route path={"/DashboardPage"} component={DashboardPage}/>
                                <Route path={"/ShopsListPage"} component={ShopListPage}/>
                                <Route path={"/SearchPage"} component={SearchPage}/>
                                <Route path={"/store/:id"} component={StorePage}/>
                        </div>:
                            <div>
                            <NavigationBar/>
                            <Route path={"/"} component={HomePage}/>
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
                    {this.state.textFromWebSocket.length>0 && alert("Hello you have a sale to look at "+this.state.textFromWebSocket)}
                </div>
          <h5 className={"credit"}>This project made by Amit & Adi Dayan & Barak Bitan</h5>
        </div>
    );

}
}
export default App;
