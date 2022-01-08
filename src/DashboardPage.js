import React from "react";
import Sale from "./Sale";
import {GoDashboard} from "react-icons/go";


class DashboardPage extends React.Component {
    state={
        sales:[{saleText:"10% discount !!!!",belongTo:true},{saleText:"555% discount !!!!",belongTo:false}]
    }


    render() {
        return(
            <div style={{textAlign:"center"}}>
                <h1>Dashboard Page <GoDashboard/></h1>
                <h3>Your promotions are here :) </h3>
                {this.state.sales.map(sale=>{
                    return(
                        <div>
                            <Sale data={sale}/>
                        </div>
                    )
                })}


            </div>
        )

    }

}
export default DashboardPage;
