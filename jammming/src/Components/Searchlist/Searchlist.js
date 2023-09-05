import React, {useState} from "react";
import Tracklist from "../Tracklist/Tracklist";


function SearchList({searchResults, onAdd}) {
    
    return (
        <div>
            <h1>Results</h1>
            <Tracklist  Tracks={searchResults} onAdd={onAdd} />
            
        </div>
    )

}
export default SearchList;