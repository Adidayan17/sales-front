import React from "react";
import {Link} from "react-router-dom";
import Cookies from "universal-cookie/es6";
import {FiSettings} from "react-icons/fi";



class SettingsPage extends React.Component {

    logOut=()=>{
        let cookies=new Cookies();
        cookies.remove("token");
        window.location.reload();
    }
    render() {
        return(
            <div style={{textAlign:"center"}}>
                <p style={{textAlign:"right"}}><Link to={"/HomePage"}><button style={{background:"lightblue"}}> Home Page</button></Link>
                <Link to={"/LoginPage"}><button style={{background:"red"}} onClick={this.logOut}>Log Out</button></Link></p>
                <h1>Setting<FiSettings/></h1>

                <h3>Select the organizations that belong to you :</h3>
                <ul style={{textAlign:"left"}}>
                <li><input type={"checkbox"}/>The Teachers organization</li>
                    <li><input type={"checkbox"}/>Hever</li>
                    <li><input type={"checkbox"}/>Tov organization</li>
                    <li><input type={"checkbox"}/>Club 365 </li>
                    <li><input type={"checkbox"}/>Life Style</li>
                </ul>

            </div>
        )

    }

}
export default SettingsPage;
