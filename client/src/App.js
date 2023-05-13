import {useState} from "react";
import {Routes, Route} from "react-router-dom";
import axios from "axios";
import Navbar from "./components/navbar/navbar.jsx";
import Home from "./views/home/home.jsx";
import Detail from "./views/detail/detail.jsx";
import About from "./views/about/about.jsx";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [characters, setCharacters] = useState([]);

  function changeHandler(e) {
    e.preventDefault();
    let inputValue = e.target.value;

    setInput(inputValue);
  }

  async function searchHandler(e) {
    e.preventDefault();

    let found = characters.find((character) => character.id === Number(input));

    //* BUSQUEDA POR NOMBRE
    // const result = chars.filter((character) =>
    //   character.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())
    // );
    // setCharacters(result);

    //* CON FETCH
    // if (!found) {
    //   fetch(`https://rickandmortyapi.com/api/character/${input}`)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       if (data.name) {
    //         setCharacters((oldChars) => [...oldChars, data]);
    //       } else {
    //         window.alert("No hay personajes con ese ID");
    //       }
    //     });
    // } else {
    //   alert("el personaje ya fue agregado");
    // }

    //* CON AXIOS

    if (!found) {
      let response = (
        await axios.get(`https://rickandmortyapi.com/api/character/${input}`)
      ).data;

      if (response.name) {
        setCharacters([...characters, response]);
      }
    } else {
      alert("el personaje ya fue agregado");
    }
  }

  function closeHandler(id) {
    let found = characters.find((character) => character.id === id);
    let deleted = characters.filter((character) => character.id !== found.id);
    setCharacters(deleted);
  }

  function randomHandler() {
    let haveIt = [];

    let random = (Math.random() * 826).toFixed();

    random = Number(random);

    if (!haveIt.includes(random)) {
      haveIt.push(random);
      fetch(`https://rickandmortyapi.com/api/character/${random}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        });
    } else {
      alert("Ya agregaste a todos los personajes");
    }
  }

return (
  <div className="App">
     <Navbar
        onSearch={searchHandler}
        onChange={changeHandler}
        random={randomHandler}
     />

    

      <Routes>
        <Route path="/home" element={<Home characters={characters} onClose={closeHandler}/>}/>
        <Route path="/detail/:id" element={<Detail />}/>
        <Route path="/about" element={<About />}/>
      
      </Routes>

  </div>
);
  
}

export default App;
