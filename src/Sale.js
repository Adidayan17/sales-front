import React from "react";


class Sale extends React.Component {

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
                    <h3 style={{color:"black"}}>Store : {this.props.data.store.storeName}</h3>
                    <h3 style={{color:this.props.border}}>offer the sale: {this.props.data.saleText}</h3></div>
            </div>
        )
    }
}

export default Sale;
