import React from "react";
import Cookies from "universal-cookie/es6";
import {BiSearch} from "react-icons/bi";
import Sale from "./Sale";
import axios from "axios";


class SearchPage extends React.Component {
    state = {
        sales:[],
        userSales :[],
        searching: "",
        border:""
    }
    componentDidMount() {
        this.getSales()
    }

    searching = (e) => {
        let searching = e.target.value
        this.setState({
            searching: searching
        })
    }
    filter = () => {
        const filtered = this.state.sales.filter(sale => {
            return (sale.saleText.includes(this.state.searching))
        })
        return filtered;
    }

    getSales=()=>{
        const cookies = new Cookies();
        let token=cookies.get("token")
        axios.get("http://127.0.0.1:8989/get-all-sales",{
            params: {
                token:token
            }}).then(response=> {
            if (response.data) {
                this.setState({
                    sales: response.data
                })
            }
        })
        axios.get("http://127.0.0.1:8989/get-sales-by-user",{
            params:{
                token:token
            }
        }).then((response)=>{

            if(response.data){
                this.setState({userSales:response.data})
            }else {
                this.setState({userSales:[]})
            }

        })

    }

    doseSaleBelongToUser =(saleId)=>{
        let belong = false
        this.state.userSales.map((sale)=>{
            return(
                <div>
                    {
                        sale.id == saleId  &&
                        <div>
                            {
                                belong = true
                            }
                        </div>
                    }
                </div>
            )
        })
        return belong
    }



    render() {
        return(
            <div style={{textAlign:"center"}}>
                <h1>Search For Sales Here  <BiSearch/></h1>
                <p>
                    <input type={"text"} onChange={this.searching} placeholder={"Your text here ...."}/></p>

                {
                    this.filter().map(sale => {
                        return (
                            <Sale data={sale} key={sale.id} border={this.doseSaleBelongToUser(sale.id)?"green":"red"}/>
                        ) })
                }
                <p><span>Green means that you can use this promotions ,and red means that you can't</span></p>
            </div>
        )

    }

}
export default SearchPage;