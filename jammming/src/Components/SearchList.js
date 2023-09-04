import React, {useState} from "react";
import Tracklist from "../Components/Tracklist";

import Styles from "../Styles/SearchList.module.css"

function SearchList({searchResults, onAdd}) {
    
    return (
        <div>
            <h1>Results</h1>
            <Tracklist Tracks={searchResults} onAdd={onAdd} />
            
        </div>
    )

}
export default SearchList;