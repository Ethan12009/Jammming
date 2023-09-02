import React, {useState} from "react";

import Styles from "../Styles/SearchList.module.css"

function Track(props) {
    const [add, setAdd] = useState("")
    const handleClick = (e) => {
        
    }

    return (
            <div className={Styles.track}>
                <div style={{marginLeft: 20}}>
                    <h3 className={Styles.h3}>{props.name}</h3>
                    <p className={Styles.p}>{props.artist} | {props.album}</p>
                </div>
                <div style={{display: "flex", alignItems: "center"}}>
                <button onClick={handleClick} className={Styles.button2}>-</button>
                </div>
            </div>
    )
}

export default Track;