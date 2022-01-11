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
          switch(response.data) {
              case true: {
                  this.setState({
                      border: "green"
                  })
              }
                  break;
              case false: {
                  this.setState({
                      border: "red"
                  })
              }break;
          }
      })
  }

    render() {

        return (
            <div>
                <div style={{
                    border: "yellow solid 4px",
                    width: "50%",
                    textAlign: "center",
                    marginBottom: "3%",
                    marginLeft: "25%"
                }}>
                    <h3 style={{color:this.state.border}}>{this.props.data.saleText}</h3></div>
            </div>
        )
    }
}

export default Sale;
