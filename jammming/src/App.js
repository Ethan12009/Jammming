import React, {useState} from "react";
import './App.css';
import SearchBar from "./Components/SearchBar";
import Playlist from './Components/Playlist';
import SearchList from './Components/SearchList';
import Track from "./Components/Track";
import Track2 from "./Components/Track2"

function App() {

  const [data, setData] = useState([]);
  const add = () => {
    setData(() => {
      
    })
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
const listItems = array.map((song) => <Track name={song.name} artist={song.artist} key={song.id} album={song.album} onClick={add} />)

  return (
    <div className="App">
      <header className="App-header">
        
        <SearchBar/>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", columnGap: 100}}>
          <SearchList listItems={listItems}  />
          <Playlist  list={data} />
        </div>
      </header>
    </div>
  );
}

export default App;
