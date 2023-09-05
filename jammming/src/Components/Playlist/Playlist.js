import React, {useState} from "react";
import Tracklist from "../Tracklist/Tracklist";

function Playlist({playlistTracks}) {
    const submitHandler = (e) => {
        e.prevent.default();
    }
   
    return (
        <form  onSubmit={submitHandler}>
            <h1>Playlist</h1>
            <Tracklist Tracks={playlistTracks} />
            <button>Save to spotify</button>
        </form>
    )
}

export default Playlist;