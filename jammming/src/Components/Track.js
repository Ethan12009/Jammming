import React, {useState} from "react";

import Styles from "../Styles/SearchList.module.css"

function Track(props) {
    
    

    return (
            <div className={Styles.track}>
                <div style={{marginLeft: 20}}>
                    <h3 className={Styles.h3}>{props.name}</h3>
                    <p className={Styles.p}>{props.artist} | {props.album}</p>
                </div>
                <div style={{display: "flex", alignItems: "center"}}>
                <button onClick={props.onClick} className={Styles.button}>+</button>
                </div>
            </div>
    )
}

export default Track;