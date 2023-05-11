import CharacterList from "./components/list_character";
import data from "./assets/data.json";
import "./styles.css";

function App(){
  return(
    <div className="app">
      <h1>Rick & Morty</h1>
      <h2>characters</h2>
      <div className="container">
        <CharacterList data = {data}/>
      </div>
    </div>
  );
};

export default App;
