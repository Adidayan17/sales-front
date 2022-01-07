import React from "react";
import Sale from "./Sale";


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
