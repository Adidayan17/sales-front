import {NavLink} from "react-router-dom";


function Shop(props) {

    return (
        <div style={{
            border: "#7fe8c4 solid 5px",
            width: "50%",
            textAlign: "center",
            marginBottom: "3%",
            marginLeft: "25%"
        }}>
            <h3>Store Name:</h3><NavLink to={"/store/" + props.data.id} style={{textDecoration: "none"}}>
            <h3>{props.data.storeName}</h3></NavLink>

        </div>
    )
}

export default Shop;
