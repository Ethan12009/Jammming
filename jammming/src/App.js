import React, {useState} from "react";
import './App.css';
import SearchBar from "./Components/SearchBar/SearchBar";
import Playlist from './Components/Playlist/Playlist';
import SearchList from './Components/Searchlist/Searchlist';
import Tracklist from "./Components/Tracklist/Tracklist";


function App() {

  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [searchResults, setSearchResults] = useState([{
    name: "francis forever",
    artist: "mitski",
    album: "bury me at makeout creek",
    id: 1,
    uri: "a"
    },
    {
    name: "waltz for zizi",
    artist: "seatbelts",
    album: "cowboy bebop",
    id: 2,
    uri: "b"
    }]);
 
  function addTrack(track){

    
    if(playlistTracks.find(song => song.id === track.id)) {
      return
    }
    else {
      setPlaylistTracks(oldData => [...oldData, track]);
    }
  }
  const removeTrack = (track) => {
    const updatedTracks = playlistTracks.filter(current=> current.id != track.id)
    setPlaylistTracks(updatedTracks)
    
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <SearchBar/>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", columnGap: 100}}>
          <SearchList searchResults={searchResults} onAdd={addTrack}  />
          <Playlist  playlistTracks={playlistTracks} onRemove={removeTrack} />
        </div>
      </header>
    </div>
  );
}

export default App;
