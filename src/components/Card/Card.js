import './styles.css'

const Card = ({ name, id, type, image }) =>
(
  <div className="pokemon-card">    
    <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
    <p>ID: {id}</p>
    <p>Type: {type}</p>
    <img src={image} alt={name} />
  </div>
);

export default Card