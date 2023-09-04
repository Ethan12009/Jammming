import React from "react";

import Styles from "../Styles/SearchList.module.css"

function Track({track, onAdd }) {
    
    

    return (
            <div className={Styles.track}>
                <div style={{marginLeft: 20}}>
                    <h3 className={Styles.h3}>{track.name}</h3>
                    <p className={Styles.p}>{track.artist} | {track.album}</p>
                </div>
                <div style={{display: "flex", alignItems: "center"}}>
                <button  onClick={()=> onAdd(track)} className={Styles.button}>+</button>
                </div>
            </div>
    )
}

export default Track;