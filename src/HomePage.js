import React from "react";
import {Link} from "react-router-dom";
import {AiOutlineHome} from "react-icons/ai";
import {GoDashboard} from "react-icons/go";
import {BsShop} from "react-icons/bs";
import {FiSettings} from "react-icons/fi";
import {BiSearch} from "react-icons/bi";


class HomePage extends React.Component {


    render() {
        return(
            <div >
                <h1 >Home Page <AiOutlineHome/></h1>
                <div className={"button-home-page"}>
                    <p>
                    <Link to={"/DashboardPage"}><button className={"buttons"}>Dashboard Page <GoDashboard/></button></Link>
                    <Link to={"/ShopsListPage"}><button className={"buttons"}>Shop List <BsShop/></button></Link>
                    </p>
                    <p>
                    <Link to={"/SettingsPage"}><button className={"buttons"}>Settings <FiSettings/></button></Link>
                        <Link to={"/SearchPage"}><button className={"buttons"}>Search <BiSearch/></button></Link></p>
                </div>

            </div>
        )

    }

}
export default HomePage;
