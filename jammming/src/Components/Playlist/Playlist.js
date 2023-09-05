import React, {useState} from "react";
import Tracklist from "../Tracklist/Tracklist";

function Playlist({playlistTracks, onRemove}) {
    
   
    return (
        <form>
            <h1>Playlist</h1>
            <Tracklist  Tracks={playlistTracks} onRemove={onRemove} />
            <button>Save to spotify</button>
        </form>
    )
}

export default Playlist;