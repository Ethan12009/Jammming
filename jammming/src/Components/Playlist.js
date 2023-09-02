import React, {useState} from "react";
import Track2 from "./Track2";

function Playlist(props) {
    const [input, setInput] = useState("");
    const [playlistName, setPlaylistName] = useState("");
    const inputHandler = (e) => {
        setInput(e.target.value)
    }
    const submitHandler = (e) => {
        e.prevent.default();
    }
    const array = [
        {
        name: "francis forever",
        artist: "mitski",
        album: "bury me at makeout creek",
        id: 1,
        },
        {
        name: "waltz for zizi",
        artist: "seatbelts",
        album: "cowboy bebop",
        id: 2
        }
    ]
    

   
    return (
        <form onSubmit={submitHandler}>
            <input onChange={inputHandler} type="text" value={input} placeholder="Name your playlist"></input>
            <ul>{props.list}</ul>
            <button>Save to spotify</button>
        </form>
    )
}

export default Playlist;