import React from "react";
import Cookies from "universal-cookie/es6";
import {BiSearch} from "react-icons/bi";
import Sale from "./Sale";
import axios from "axios";


class SearchPage extends React.Component {
    state = {
        sales:[],
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
    ifTheSaleBelongToMe = (sale) => {
        const cookies = new Cookies();
        let token = cookies.get("token")
        axios.get("http://127.0.0.1:8989/if-sale-belong-to-user", {
            params: {
                token: token,
                saleId:sale.id
            }
        }).then(response => {
if(response.data){
    this.setState({
        border:"green"
    })
}else {
    this.setState({
        border:"red"
    })
}
        })
    }
    getSales=()=>{
        const cookies = new Cookies();
      let token=cookies.get("token")
        axios.get("http://127.0.0.1:8989/get-sales-by-user",{
            params: {
                token:token
            }}).then(response=> {
            if (response.data) {
                this.setState({
                    sales: response.data
                })
            }
            })}



    render() {
        return(
            <div style={{textAlign:"center"}}>
                <h1>Search For Sales Here  <BiSearch/></h1>
<p>
    <input type={"text"} onChange={this.searching} placeholder={"Your text here ...."}/></p>

                {
                    this.filter().map(sale => {
                        return (
                        <Sale data={sale} border={this.state.border}/>
                        ) })
                }
                <p><span>Green border means that you can use this promotions ,and red border means that you can't</span></p>



            </div>
        )

    }

}
export default SearchPage;
