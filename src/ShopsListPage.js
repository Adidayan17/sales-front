import React from "react";
import Shop from "./Shop";
import {BsShop} from "react-icons/bs";
import Cookies from "universal-cookie/es6";
import axios from "axios";


class ShopListPage extends React.Component {
    state={
        shops:[{id:1,storeName:"Optic 2000"}]
    }
    componentDidMount() {
        this.getStores()
    }

    getStores=()=>{
        axios.get("http://127.0.0.1:8989/get-all-stores")
            .then(response=> {
            if (response.data) {
                this.setState({
                    shops: response.data
                })
            }
        })}

    render() {
        return(
            <div style={{textAlign:"center"}}>
                <h1>Shop List <BsShop/></h1>
                {this.state.shops.map(shop=>{
                    return(
                    <Shop data={shop}/>)
                })}
            </div>
        )

    }

}
export default ShopListPage;
