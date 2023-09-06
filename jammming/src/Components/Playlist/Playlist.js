import React, {useState} from "react";
import Tracklist from "../Tracklist/Tracklist";
import Styles from "../Playlist/Playlist.module.css"

function Playlist({playlistTracks, onRemove, onSubmit, onChange, playlistName}) {
    
   
    return (
        <form className={Styles.form} onSubmit={onSubmit}>
            <input className={Styles.playlistName} value={playlistName} onChange={onChange} type="text"></input>
            <Tracklist  Tracks={playlistTracks} onRemove={onRemove} />
            <button>Save to spotify</button>
        </form>
    )
}

export default Playlist;