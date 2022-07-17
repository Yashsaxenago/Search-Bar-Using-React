import React from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import GameData from "./Data.json";



function App() {
  return (
    <div className="App">
      <h1>Search Your Game and Enjoy </h1>
      <SearchBar placeholder="Enter a Game Name ..." data={GameData} />
      {GameData.map((val,key)=>{
        return(
          <div className="card" key={key}>
            <p>Game Title:{val.title}</p>
            <p>Game Platform:{val.platform}</p>
            <p>Game Score:{val.score}</p>
            <p>Game Genre:{val.genre}</p>
            <p>Game Editors_Choice{val.editors_choice}</p>
            </div>
        );
      })}
    </div>
  );
}

export default App;
