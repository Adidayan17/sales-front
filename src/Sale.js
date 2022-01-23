import React from "react";


class Sale extends React.Component {

    render() {

        return (
            <div>
                <div style={{
                    border: "#7fe8c4 solid 10px",
                    width: "50%",
                    textAlign: "center",
                    marginBottom: "3%",
                    marginLeft: "25%",
                    borderRadius: "100%"
                }}>
                    <h3 style={{color: "black"}}>Store : {this.props.data.store.storeName} ,offer the sale: </h3>
                    <h3 style={{color: this.props.border}}>{this.props.data.saleText}</h3></div>
            </div>
        )
    }
}

export default Sale;
