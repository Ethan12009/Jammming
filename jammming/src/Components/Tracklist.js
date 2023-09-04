import React from "react";
import Track from "./Track";

function Tracklist({Tracks, onAdd}) {

    
    return (
        <div>
            {Tracks?.map((track, index) =>
            <Track 
            track={track}
            key={index}
            onAdd={onAdd}
             />)}
        </div>
    )
}

export default Tracklist;