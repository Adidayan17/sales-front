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


class App extends React.Component {
  render() {


    return (
        <div>
            <BrowserRouter>

                    <div>

                        <Route path={"/HomePage"} component={HomePage}/>
                        <Route path={"/SettingsPage"} component={SettingsPage}/>
                        <Route path={"/DashboardPage"} component={DashboardPage}/>
                        <Route path={"/ShopsListPage"} component={ShopListPage}/>
                        <Route path={"/SearchPage"} component={SearchPage}/>


                    </div>
                    <div>
                        <Route path={"/"} component={LoginPage}/>

                    </div>

            </BrowserRouter>



          <h3 className={"credit"}>This project made by Amit & Adi Dayan</h3>
        </div>
    );
  }
}

export default App;
