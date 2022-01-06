import React from "react";
import {Link} from "react-router-dom";
import Cookies from "universal-cookie/es6";
import {BiSearch} from "react-icons/bi";


class SearchPage extends React.Component {

    logOut=()=>{
        let cookies=new Cookies();
        cookies.remove("token");
        window.location.reload();
    }
    render() {
        return(
            <div style={{textAlign:"center"}}>
                <h1>Search For Sales Here <BiSearch/></h1>




            </div>
        )

    }

}
export default SearchPage;
