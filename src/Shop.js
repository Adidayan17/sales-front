import {NavLink} from "react-router-dom";


function Shop(props){

        return(
            <div style={{border: "black solid 6px", width: "25%", textAlign: "center",marginBottom:"3%",marginLeft:"37%"}}>
                    <h3>Store Name:</h3><NavLink to={"/store/"+props.data.id} style={{textDecoration:"none"}}><h3>{props.data.storeName}</h3></NavLink>

</div>
        )}
export default Shop;
