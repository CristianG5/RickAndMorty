import Cards from "../../components/cards/cards";
//import logoRM from "./assets/logorm.png";

function Home({characters, onClose}){

    return (
        <div className="home-container">
         
          <Cards characters={characters} onClose={onClose} />
        
        </div>
      );
}

export default Home;