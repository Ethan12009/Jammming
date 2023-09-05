import React, {useState} from "react";
import Styles from "../Styles/SearchList.module.css"
import Tracklist from "./Tracklist";

function Playlist({playlistTracks}) {
    const submitHandler = (e) => {
        e.prevent.default();
    }
   
    return (
        <form className={Styles.playlist} onSubmit={submitHandler}>
            <h1>Playlist</h1>
            <Tracklist Tracks={playlistTracks} />
            <button>Save to spotify</button>
        </form>
    )
}

export default Playlist;