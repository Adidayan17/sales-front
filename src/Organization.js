import React from "react";
import Cookies from "universal-cookie/es6";
import axios from "axios";

class Organization extends React.Component{
    state =
        {
            belong: false
        }

        componentDidMount() {
        this.checkOrganization();
        }
        checkOrganization(){
            const cookies = new Cookies();
            let token = cookies.get("token");
            axios.get("http://127.0.0.1:8989/if-user-belong-to-organization",{
                params :{
                    token:token,
                  organizationId: this.props.data.id
                }
            }).then((response)=>{
                if(response.data){
                    this.setState({belong:true})
                }else {
                    this.setState({belong:false})

                }
            })
        }

    render() {
        return (
            <div style={{textAlign:"center"}}>
                <p>
                    <input type={"checkbox"} onChange={()=>{
                        let cookies=new Cookies();
                        let token=cookies.get("token");
                        let data =new FormData();
                        data.append("token",token)
                        data.append("organizationId",this.props.data.id)
                        axios.post("http://127.0.0.1:8989/change-setting",data)
                            .then((response)=>{
                                console.log(response.data)
                                this.checkOrganization();
                            })
                    }} value={this.props.data.id} checked={this.state.belong}/><label>{this.props.data.organizationName}</label>
                </p>
            </div>
        );
    }


}
export default Organization;