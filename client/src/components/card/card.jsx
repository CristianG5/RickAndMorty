import {useNavigate} from "react-router-dom";
import "./card.styles.css";

export default function Card(props) {
  const navigate = useNavigate()
  const {character, onClose} = props;

  function navigateHandler(){
    navigate(`/detail/${character.id}`)
  }

  return (
    <div className="card-container">
      <div className="image-container">
        <img
          className="character-image"
          onClick={navigateHandler}
          src={character.image}
          alt={character.name}
        />
        <h2 className="name">{character.name}</h2>
        <button className="close-button" onClick={() => onClose(character.id)}>
          X
        </button>
      </div>
      <div className="atributes">
        <h2>{character.species}</h2>
        <h2>{character.gender}</h2>
      </div>
    </div>
  );
}
