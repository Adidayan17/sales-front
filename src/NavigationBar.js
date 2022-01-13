import './App.css';
import * as React from "react";
import {NavLink} from "react-router-dom";
import Cookies from "universal-cookie/es6";


class NavigationBar extends React.Component {
    state = {
        links: [{title: "Home", path: "/HomePage"}, {title: "Settings", path: "/SettingsPage"}
            , {title: "Dashboard", path:"/DashboardPage"},
            {title: "Shop List", path:"/ShopsListPage"},{title:"Search", path:"/SearchPage"}

        ]
    }

    logOut = () => {
        const cookies = new Cookies();
        cookies.remove("logged_in");
        cookies.remove("token");
        window.location.reload();
    }
    render() {
        return (
            <div style={{marginRight: "20px", marginLeft: "20px", paddingRight: "20px"}}>
                <ul className={"navi"}>
                    {
                        this.state.links.map(link => {
                            return (
                                <NavLink to={link.path} className={"link"} activeClassName={"active"}>
                                    <li style={{float: "left",direction:"none",textDecoration:"none"}}>
                                        <i style={{margin:"10px" ,color:"black"}}>
                                            {link.title}
                                        </i>
                                    </li>
                                </NavLink>
                            )
                        })
                    }

                <button style={{background:"red",float:"right"}} onClick={this.logOut}>Log Out</button>
                </ul>
            </div>
        )
    }
}
export default NavigationBar;
