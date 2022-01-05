import React from "react";
import {Link} from "react-router-dom";
import Cookies from "universal-cookie/es6";


class SettingsPage extends React.Component {

    logOut=()=>{
        let cookies=new Cookies();
        cookies.remove("token");
        window.location.reload();
    }
    render() {
        return(
            <div style={{textAlign:"center"}}>
                <h1>Setting</h1>
                <h3>Select the organizations that belong to you :</h3>
                <input type={"checkbox"}/>Some organization<br></br>
                <input type={"checkbox"}/>Some organization<br></br>
                <input type={"checkbox"}/>Some organization<br></br>
                <input type={"checkbox"}/>Some organization<br></br>
                <input type={"checkbox"}/>Some organization<br></br>
                <Link to={"/HomePage"}><button style={{background:"lightblue",width:"150px",height:"50px",margin:"5px"}}> Home Page</button></Link>
                <p style={{textAlign:"right"}}><Link to={"/LoginPage"}><button style={{background:"red"}} onClick={this.logOut}>Log Out</button></Link></p>
            </div>
        )

    }

}
export default SettingsPage;
