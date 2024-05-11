import { Link } from "react-router-dom"
import './styles.css'
function Header() {
    return (
        <header>
            <h2>Pokedex</h2>
            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/about">Sobre</Link>
                <Link to="/group">Grupo</Link>
                <Link to="/contato">Contato</Link>
            </div>

        </header>
    )
}

export default Header