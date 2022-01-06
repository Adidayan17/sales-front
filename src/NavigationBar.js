import './App.css';
import * as React from "react";
import {Link, NavLink} from "react-router-dom";
import Cookies from "universal-cookie/es6";


class NavigationBar extends React.Component {
    state = {
        links: [{title: "Home", path: "/HomePage"}, {title: "Settings", path: "/SettingsPage"}
            , {title: "Dashboard", path:"/DashboardPage"},
            {title: "Shop List", path:"/ShopsListPage"},{title:"Search", path:"/SearchPage"}

        ]
    }

    logout = () => {
        const cookies = new Cookies();
        cookies.remove("logged_in");
        window.location.reload();
    }
    render() {
        return (
            <div style={{marginRight: "20px", marginLeft: "20px", borderRight: "1px solid", paddingRight: "20px"}}>
                <ul>
                    {
                        this.state.links.map(link => {
                            return (
                                <NavLink to={link.path} className={"link"} activeClassName={"active"}>
                                    <li style={{marginBottom: "10px"}}>
                                        <i>
                                            {link.title}
                                        </i>
                                    </li>
                                </NavLink>
                            )
                        })
                    }

                <button style={{background:"red"}} onClick={this.logOut}>Log Out</button>
                </ul>
            </div>
        )
    }
}
export default NavigationBar;
