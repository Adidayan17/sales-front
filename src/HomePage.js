import React from "react";
import {Link} from "react-router-dom";
import Cookies from "universal-cookie/es6";
import {AiOutlineHome} from "react-icons/ai";


class HomePage extends React.Component {

    logOut=()=>{
        let cookies=new Cookies();
        cookies.remove("token");
        window.location.reload();
    }
    render() {
        return(
            <div style={{textAlign:"center"}}>
                <p style={{textAlign:"right"}}><Link to={"/LoginPage"}><button style={{background:"red"}} onClick={this.logOut}>Log Out</button></Link></p>
                <h1 style={{color:"black"}}>Home Page <AiOutlineHome/></h1>
                <div>
                    <p>
                    <Link to={"/DashboardPage"}><button style={{background:"lightblue",width:"150px",height:"50px",margin:"5px"}}> Dashboard Page</button></Link>
                    <Link to={"/ShopsListPage"}><button style={{background:"lightblue",width:"150px",height:"50px",margin:"5px"}}>Shop List</button></Link>
                    </p>
                    <p>
                    <Link to={"/SettingsPage"}><button style={{background:"lightblue",width:"150px",height:"50px",margin:"5px"}}> Your Setting</button></Link>
                        <Link to={"/SearchPage"}><button style={{background:"lightblue",width:"150px",height:"50px",margin:"5px"}}> Search</button></Link></p>
                </div>

            </div>
        )

    }

}
export default HomePage;
