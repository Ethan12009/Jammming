import React, { useState, useEffect } from "react";
import './App.css';
import SearchBar from "./Components/SearchBar/SearchBar";
import Playlist from './Components/Playlist/Playlist';
import SearchList from './Components/Searchlist/Searchlist';
import Login from "./Components/Login/Login";


function App() {
  const [searchInput, setSearchInput] = useState("");
  const [expiry, setExpiry] = useState()
  const [token, setToken] = useState("")
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

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.href);
    const url = new URLSearchParams(window.location.search)
    const expiryTime = queryParams.get("expires_in")
    let urlToken = queryParams.get("access_token")
    // const hash = window.location.hash
    // let token = window.localStorage.getItem("token")

    // if (!token && hash) {
    //   token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

    //   window.location.hash = ""
    //   window.localStorage.setItem("token", token)
    // }
    setExpiry(expiryTime)
    setToken(urlToken)
    if(expiryTime) {
      setTimeout(() => {setExpiry(0); window.location.hash = ""}, expiryTime * 1000 )
   
    }
    // console.log(token)
    // console.log(expiryTime)
  }, [])
  console.log(expiry)
  console.log(token)
  const search = async () => {
    console.log(token)
    let searchEndpoint = `https://api.spotify.com/v1/search?q=${searchInput}&type=track`
    const response = await fetch(searchEndpoint, {headers: {
      Authorization: `Bearer ${token}`
    }})
    if(response.ok) {
      console.log(response)
    }
    // setSearchResults(await response.json())
  }
  const getRandomString = (length) => {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789"
    for (let i = 0; i <= length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text;
  }
  let url = "https://accounts.spotify.com/authorize"
  const client_id = "abe8d36909674f07a5ef4e8bc1de4c34";
  const redirect_uri = "http://localhost:3000";
  const state = getRandomString(16);
  url += "?response_type=token";
  url += "&client_id=" + encodeURIComponent(client_id);
  url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
  url += "&state=" + encodeURIComponent(state);

  const handleChange = (event) => {
    setPlaylistName(event.target.value)
  }
  const handleSearch = (e) => {
    setSearchInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const newArray = [];
    for (const track of playlistTracks) {
      newArray.push(track.uri)
    }
    const savedName = playlistName;
    setPlaylistTracks([])
    setPlaylistName("")
  }



  function addTrack(track) {


    if (playlistTracks.find(song => song.id === track.id)) {
      return
    }
    else {
      setPlaylistTracks(oldData => [...oldData, track]);
    }
  }
  const removeTrack = (targetIndex) => {
    setPlaylistTracks(prev => prev.filter((item, index) => index !== targetIndex))

  }

  return (
    <div className="App">
      <header className="App-header">
        <Login token={token} url={url} expiry={expiry} />
        <SearchBar search={search} searchInput={searchInput} onChange={handleSearch} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", columnGap: 100 }}>
          <SearchList searchResults={searchResults} onAdd={addTrack} />
          <Playlist playlistTracks={playlistTracks} onRemove={removeTrack} onChange={handleChange} onSubmit={handleSubmit} playlistName={playlistName} />
        </div>
      </header>
    </div>
  );
}

export default App;
