import React from "react";
import './App.css';
import Cookies from "universal-cookie/es6";
import {FiSettings} from "react-icons/fi";
import axios from "axios";

class SettingsPage extends React.Component {

    state = {
        organizations: [],
        userOrganizations: [],
        checked: true
    }

    componentDidMount() {
        this.getAllOrganizations();
        this.getUserOrganizations();
    }

    getAllOrganizations = () => {
        axios.get("http://127.0.0.1:8989/get-organizations")
            .then((response) => {
                if (response.data.length > 0) {
                    this.setState({
                        organizations: response.data
                    })
                } else {
                    this.setState({organizations: []})
                }
            })

    }

    getUserOrganizations = () => {
        const cookies = new Cookies();
        let token = cookies.get("token")
        axios.get("http://127.0.0.1:8989/get-organization-for-user", {
            params: {token: token}
        }).then((response) => {
            if (response.data) {
                this.setState({userOrganizations: response.data})
            } else {
                this.setState({userOrganizations: []})
            }
        })


    }


    doseOrganizationBelongToUser = (organizationId) => {
        let belong = false
        console.log("change is " + this.state.change)

        this.state.userOrganizations.map((organization) => {
            return (
                <div>{
                    organization.id == organizationId &&
                    <div>{
                        belong = true
                    }</div>

                }
                </div>
            )
        })
        return belong
    }


    render() {
        return (
            <div style={{textAlign: "center"}}>
                <h1>Settings <FiSettings/></h1>
                <h2>Select the organizations that belong to you :</h2>
                {this.state.organizations.map(organization => {
                    return (
                        <div className={"settings"}>
                            <p>
                                <input type={"checkbox"} onChange={() => {
                                    let cookies = new Cookies();
                                    let token = cookies.get("token");
                                    let data = new FormData();
                                    data.append("token", token)
                                    data.append("organizationId", organization.id)
                                    axios.post("http://127.0.0.1:8989/change-setting", data)
                                        .then((response) => {
                                            this.getUserOrganizations();

                                        })
                                }} value={organization.id}
                                       checked={this.doseOrganizationBelongToUser(organization.id)}/><label>{organization.organizationName}</label>
                            </p>
                        </div>

                    )
                })
                }
            </div>
        )

    }

}

export default SettingsPage;
