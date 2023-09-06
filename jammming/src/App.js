import React, {useState} from "react";
import './App.css';
import SearchBar from "./Components/SearchBar/SearchBar";
import Playlist from './Components/Playlist/Playlist';
import SearchList from './Components/Searchlist/Searchlist';
import Tracklist from "./Components/Tracklist/Tracklist";


function App() {
  const [playlistName, setPlaylistName] = useState("")
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [searchResults, setSearchResults] = useState([{
    name: "francis forever",
    artist: "mitski",
    album: "bury me at makeout creek",
    id: 1,
    uri: "spotify:track:6rqhFgbbKwnb9MLmUQDhG6"
    },
    {
    name: "waltz for zizi",
    artist: "seatbelts",
    album: "cowboy bebop",
    id: 2,
    uri: "https://open.spotify.com/track/7lQasnlWcxSwfT17sFklTx?si=a2cfd6ee34ed4c65"
    }]);
    
    const handleChange = (event) => {
      setPlaylistName(event.target.value)
    }
    const handleSubmit = (e) => {
      e.preventDefault()
      const newArray = [];
      for(const track of playlistTracks) {
        newArray.push(track.uri)
      }
      const savedName = playlistName;
      setPlaylistTracks([])
      setPlaylistName("")
    }
 
  function addTrack(track){

    
    if(playlistTracks.find(song => song.id === track.id)) {
      return
    }
    else {
      setPlaylistTracks(oldData => [ ...oldData, track]);
    }
  }
  const removeTrack = (targetIndex) => {
    setPlaylistTracks(prev=> prev.filter((item, index) => index !== targetIndex))
    // const updatedList = playlistTracks.filter((currentItem) => track.id !== currentItem.id)
    // setPlaylistTracks(updatedList)
    // console.log(updatedList)  
  }
  const submitHandle = (event) => {
    alert("raghhh")
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <SearchBar/>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", columnGap: 100}}>
          <SearchList searchResults={searchResults} onAdd={addTrack}  />
          <Playlist  playlistTracks={playlistTracks} onRemove={removeTrack} onChange={handleChange} onSubmit={handleSubmit} playlistName={playlistName}/>
        </div>
      </header>
    </div>
  );
}

export default App;
