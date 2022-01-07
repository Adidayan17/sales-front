import React from "react";
import Cookies from "universal-cookie/es6";
import {BiSearch} from "react-icons/bi";
import Sale from "./Sale";
import axios from "axios";


class SearchPage extends React.Component {
    state={
        sales:[{saleText:"10% discount !!!!",belongTo:true},{saleText:"555% discount !!!!",belongTo:false}],
        searching:""
    }
componentDidMount() {
        this.getSales()
}

    searching=(e)=>{
            let searching=e.target.value
        this.setState({
             searching:searching
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
        axios.get("http://127.0.0.1:8989/get-all-sales-by-user",{
            params: {
                token:token
            }}).then(response=> {
            if (response.data) {
                this.setState({
                    sales: response.data
                })
            }})}



    render() {
        return(
            <div style={{textAlign:"center"}}>
                <h1>Search For Sales Here <BiSearch/></h1>
                <input type={"text"} onChange={this.searching} placeholder={"Your text here ...."}/>
                {
                    this.filter().map(sale => {
                        return (
                            <Sale data={sale}/>
                        )      })
                }



            </div>
        )

    }

}
export default SearchPage;
