import React from "react";
import Cookies from "universal-cookie/es6";
import axios from "axios";

class Sale extends React.Component {
    state =
        {
            border:""
        }
    componentDidMount() {
        this.saleBelonging();
    }

  saleBelonging=()=>{
      const cookies = new Cookies();
      let token = cookies.get("token")
      console.log(this.props.data.id)
      axios.get("http://127.0.0.1:8989/if-sale-belong-to-user", {
          params: {
              token: token,
              saleId: this.props.data.id
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
    render() {

        return (
            <div>
                {this.state.border == "green" ?
                    <div style={{
                        border: "green solid 4px",
                        width: "50%",
                        textAlign: "center",
                        marginBottom: "3%",
                        marginLeft: "25%"
                    }}>
                        {this.props.data.saleText}
                    </div> :
                    <div style={{
                        border: "red solid 4px",
                        width: "50%",
                        textAlign: "center",
                        marginBottom: "3%",
                        marginLeft: "25%"
                    }}>
                        {this.props.data.saleText}
                    </div>
                }
            </div>
        )
    }
}
export default Sale;
