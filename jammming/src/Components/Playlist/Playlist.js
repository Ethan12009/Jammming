import React, {useState} from "react";
import Tracklist from "../Tracklist/Tracklist";
import Styles from "../Playlist/Playlist.module.css"

function Playlist({playlistTracks, onRemove}) {
    const [playlistName, setPlaylistName] = useState("Playlist")
    const handleChange = (event) => {
        setPlaylistName(event.target.value)
    }
   
    return (
        <form className={Styles.form}>
            <input className={Styles.playlistName} value={playlistName} onChange={handleChange} type="text"></input>
            <Tracklist  Tracks={playlistTracks} onRemove={onRemove} />
            <button>Save to spotify</button>
        </form>
    )
}

export default Playlist;