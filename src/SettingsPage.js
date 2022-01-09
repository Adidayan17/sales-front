import React from "react";
import Cookies from "universal-cookie/es6";
import {FiSettings} from "react-icons/fi";
import axios from "axios";



class SettingsPage extends React.Component {

    state={
        organization:[{organizationName:"haha",id:"6"},{organizationName:"kokokok",id:"7"}],
        checked:false
    }
    componentDidMount() {
        this.getOrganizations()
    }
    organizationBelong=(organizationId)=>{
        let cookies=new Cookies();
        let token=cookies.get("token");
        axios.get("http://127.0.0.1:8989/if-user-belong-to-organization",{
            params:{
                token:token,
                organizationId:organizationId
            }
        })
            .then((response) => {
                if (response.data) {
                   this.setState({
                       checked:true
                   })
                }else{
                    this.setState({
                        checked:false
                    })
                }
            })

    }

    handleChange=(e)=> {
        let checked = e.target.checked;
        let organizationId=e.target.value;
        console.log(checked)
        console.log(organizationId)
        let cookies=new Cookies();
     let token=cookies.get("token");
        let data =new FormData();
        data.append("token",token)
        data.append("organizationId",organizationId)
        axios.post("http://127.0.0.1:8989/change-settings",data)
            .then((response)=>{
                this.organizationBelong(organizationId)

            })
    }
    getOrganizations=()=> {
        axios.get("http://127.0.0.1:8989/get-organizations")
            .then((response) => {
                if (response.data.length > 0) {
                    this.setState({
                        organizations:response.data
                    })
                }
            })
    }
    render() {
        return(
            <div style={{textAlign:"center"}}>
                <h1>Settings <FiSettings/></h1>
                <h2>Select the organizations that belong to you :</h2>
                {this.state.organization.map(organization=>{
                    return(
                        <p>
                            <input type={"checkbox"} onChange={this.handleChange} value={organization.id} checked={this.state.checked}/><label>{organization.organizationName}</label>
                        </p>
                    )
                })}




            </div>
        )

    }

}
export default SettingsPage;
