import React from "react";
import Sale from "./Sale";
import {GoDashboard} from "react-icons/go";
import axios from "axios";
import Cookies from "universal-cookie/es6";


class DashboardPage extends React.Component {
    state={
        sales:[]
    }
    componentDidMount() {
        this.getSales()
    }

    getSales=()=> {
        const cookies = new Cookies();
        let token = cookies.get("token");
        axios.get("http://127.0.0.1:8989/get-sales-by-user",{
            params:{
                token:token
            }
        }).then((response) => {
                if (response.data.length > 0) {
                    this.setState({
                        sales:response.data
                    })
                }
            })
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
