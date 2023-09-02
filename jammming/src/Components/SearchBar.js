import React, {useState} from "react";


function SearchBar() {
    const [input, setInput] = useState("")

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }
    return (
        <form>
            <input value={input} onChange={handleInputChange} placeholder="Search for music" type="text" />
            <button >Search</button>
        </form>
    )
}
export default SearchBar;