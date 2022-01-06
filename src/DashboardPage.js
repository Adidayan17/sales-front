import React from "react";
import {Link} from "react-router-dom";
import Cookies from "universal-cookie/es6";


class DashboardPage extends React.Component {
    state={
        sales:[{saleText:"10% discount !!!!"}]
    }



    render() {
        return(
            <div style={{textAlign:"center"}}>
                <h1>Dashboard Page</h1>
                <h3>Your promotions are here :) </h3>
                {this.state.sales.map(sale=>{
                    return(
                        <div style={{border: "black solid 4px", width: "50%", textAlign: "center",marginBottom:"3%",marginLeft:"25%"}}>
                            <span>{sale.saleText}</span>

                        </div>
                    )
                })}


            </div>
        )

    }

}
export default DashboardPage;
