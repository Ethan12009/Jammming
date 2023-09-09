import React, {useState} from "react";
import Styles from "../SearchBar/SearchBar.module.css"

function SearchBar() {
    const [input, setInput] = useState("")

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }
    return (
        <form className={Styles.bar}>
            <input value={input} onChange={handleInputChange} placeholder="Search for music" type="text" />
            <button >Search</button>
        </form>
    )
}
export default SearchBar;