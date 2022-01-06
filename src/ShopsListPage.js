import React from "react";
import {Link} from "react-router-dom";
import Cookies from "universal-cookie/es6";
import Shop from "./Shop";
import {BsShop} from "react-icons/bs";


class ShopListPage extends React.Component {

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
                <h1>Shop List <BsShop/></h1>
                <Shop/>
            </div>
        )

    }

}
export default ShopListPage;
