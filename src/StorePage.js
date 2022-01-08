import React from "react";
import axios from "axios";
import Sale from "./Sale";
import {AiOutlineShop} from "react-icons/ai";



class StorePage extends React.Component{
    state = {
        id:"",
        sales :[],
        storeName:"asdfsdfs"

    }
    componentDidMount() {
        const id =this.props.match.params.id;
        this.getSales(id)
        this.getStoreName(id)
    }

    getSales =(id)=>{
        console.log("store number is:"+id);
        axios.get("http://127.0.0.1:8989/get-sales-by-store-id", {
            params :
                {
                    id:id
                }}).then((response)=>{
            let sales=response.data;
            if (response.data){
                console.log("data is: "+response.data)
                this.setState({
                    sales:sales
                });
            }
            else{
                this.setState({
                    sales:[]
                })
            }
        })
    }
    getStoreName =(id)=>{

        axios.get("http://127.0.0.1:8989/get-store-name-by-store-id", {
            params :
                {
                    id:id
                }}).then((response)=>{
            if (response.data){
                this.setState({
                    storeName:response.data
                });
            }
        })
    }

    render(){
        return(
            <div style={{textAlign:"center"}}>
                <h1>{this.state.storeName} <AiOutlineShop/></h1>
                {this.state.sales.map((sale)=>{
                    return(
                        <div>
                            <div>
                                <Sale data={sale}/>
                            </div>
                            <p>

                            </p>
                        </div>
                    )
                })}

            </div>
        )
    }
}

export default StorePage;
