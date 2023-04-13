import "./card.styles.css";

export default function Card(props) {
  const {character, onClose} = props;
  return (
    <div className="card-container">
      <div className="image-container">
        <img
          className="character-image"
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
