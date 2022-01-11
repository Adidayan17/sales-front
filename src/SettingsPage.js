import React from "react";
import Cookies from "universal-cookie/es6";
import {FiSettings} from "react-icons/fi";
import axios from "axios";
import Organization from "./Organization";

class SettingsPage extends React.Component {

    state={
        organizations:[],
        checked:true
    }
    componentDidMount() {
        this.getOrganizations()
    }
    getOrganizations=()=> {
        axios.get("http://127.0.0.1:8989/get-organizations")
            .then((response) => {
                if (response.data.length > 0) {
                    this.setState({
                        organizations:response.data
                    })
                }else
                {
                    this.setState({organizations:[]})
                }
            })
    }

    render() {
        return(
            <div style={{textAlign:"center"}}>
                <h1>Settings <FiSettings/></h1>
                <h2>Select the organizations that belong to you :</h2>
                {this.state.organizations.map(organization=>{
                    return(
                        <p>
                            <Organization data={organization}/>
                        </p>
                    )
                })}




            </div>
        )

    }

}
export default SettingsPage;
