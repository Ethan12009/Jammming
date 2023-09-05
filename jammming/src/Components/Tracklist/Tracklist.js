import React from "react";
import Track from "../Track/Track";

function Tracklist({Tracks, onAdd, onRemove}) {

    
    return (
        <div>
            {Tracks.map((track, index) =>
            <Track 
            track={track}
            key={index}
            onAdd={onAdd}
            onRemove={onRemove}
             />)}
        </div>
    )
}

export default Tracklist;