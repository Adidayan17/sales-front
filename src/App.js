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


class App extends React.Component {
    state = {
        loggedIn :false,//hard coded !!!!!!
        textFromWebSocket:""

    }
    componentDidMount() {
        const cookies = new Cookies();
        let token = cookies.get("token");
        const ws = new WebSocket("ws://localhost:8989/stream?token="+token);
        ws.onmessage=(message)=> {

            const data = JSON.parse(message.data);
            this.setState({textFromWebSocket:data.saleText});
        }

        if(cookies.get("token") && cookies.get("token").length>0) {
            this.setState({loggedIn :true });

        }
    }

    render() {
        { console.log(this.state.loggedIn)}
        return (
            <div className="App">

                <BrowserRouter>
                    {this.state.loggedIn ?
                        <div>
                            <NavigationBar/>
                            <Route path={"/HomePage"} component={HomePage}/>
                            <Route path={"/SettingsPage"} component={SettingsPage}/>
                            <Route path={"/DashboardPage"} component={DashboardPage}/>
                            <Route path={"/ShopsListPage"} component={ShopListPage}/>
                            <Route path={"/SearchPage"} component={SearchPage}/>
                            <Route path={"/store/:id"} component={StorePage}/>
                        </div>:
                        <div>
                            <Route path={"/"} component={LoginPage}/>
                        </div>
                    }
            </BrowserRouter>
                <div>
                    {this.state.textFromWebSocket.length>0 && alert("Hello you have a sale to look at "+this.state.textFromWebSocket)}
                </div>



          <h5 className={"credit"}>This project made by Amit & Adi Dayan & Barak Bitan</h5>
        </div>
    );
  }
}

export default App;
