import React from "react";
import {Link} from "react-router-dom";
import Cookies from "universal-cookie/es6";
import {FiSettings} from "react-icons/fi";
import axios from "axios";



class SettingsPage extends React.Component {

    state={
        organization:[{organizationName:"haha",id:"6"}],
    }
    componentDidMount() {
        this.getOrganizations()
    }

    logOut=()=>{
        let cookies=new Cookies();
        cookies.remove("token");
        window.location.reload();
    }
    handleChange=(e)=> {
        let checked = e.target.checked;
        let saleId=e.target.value;
        console.log(checked)
        console.log(saleId)
        let cookies=new Cookies();
     let token=cookies.get("token");
        let data =new FormData();
        data.append("token",token)
        data.append("saleId",saleId)
        axios.post("http://127.0.0.1:8989/change-settings",data)
            .then((response)=>{
            })
    }


    getOrganizations=()=> {
        axios.get("http://127.0.0.1:8989/get-organizations")
            .then((response) => {
                if (response.data.length > 0) {
                    this.setState({
                        organizations: response.data
                    })
                }
            })
    }
    render() {
        return(
            <div style={{textAlign:"center"}}>
                <h1>Setting<FiSettings/></h1>
                <h2>Select the organizations that belong to you :</h2>

                {this.state.organization.map(organization=>{
                    return(
                        <div>
                            <input type={"checkbox"} onChange={this.handleChange} value={organization.id}/><span>{organization.organizationName}</span>
                        </div>
                    )
                })}




            </div>
        )

    }

}
export default SettingsPage;
