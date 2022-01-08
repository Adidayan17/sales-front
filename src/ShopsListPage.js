import React from "react";
import Shop from "./Shop";
import {BsShop} from "react-icons/bs";


class ShopListPage extends React.Component {
    state={
        shops:[{id:1,storeName:"Optic 2000"}]
    }


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
