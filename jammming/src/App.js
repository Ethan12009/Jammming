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
  // const add = (event) => {
  //   console.log(event)
  //   const index = event.target.value;
  //   const arrayIndexed = songs[index];
  //   console.log(data)
  //   const 

  //   if (data[index] !== arrayIndexed) {
  //     setData((prev) => 
  //     [
  //       [<RemoveTrack name={arrayIndexed.name} artist={arrayIndexed.artist} key={arrayIndexed.id} album={arrayIndexed.album} />],
  //       ...prev
  //     ]
  //   )
  //   }
  // }
  function addTrack(track){
    // const playlistSongs = data;
    // const index = event.target.value;
    // const arrayIndexed = searchResults[index];
    // console.log(arrayIndexed);
    console.log(track)
    if(playlistTracks.find(song => song.id === track.id)) {
      return
    }
    else {
      setPlaylistTracks(oldData => [...oldData, track]);
    }
    // console.log(data)
  }

// const listItems = songs.map((song, index) => <Track name={song.name} artist={song.artist} key={song.id} album={song.album} onClick={add} song={index} />)
  
  return (
    <div className="App">
      <header className="App-header">
        
        <SearchBar/>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", columnGap: 100}}>
          <SearchList searchResults={searchResults} onAdd={addTrack}  />
          <Playlist  playlistTracks={playlistTracks} />
        </div>
      </header>
    </div>
  );
}

export default App;
