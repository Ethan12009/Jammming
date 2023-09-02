import React, {useState} from "react";
import Track from "./Track"
import Styles from "../Styles/SearchList.module.css"

function SearchList(props) {
    

    


    return ( 
        <div>
            <h1>Results</h1>
            <ul>{props.listItems}</ul>
            
        </div>
    )
}

export default SearchList;