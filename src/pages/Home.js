import { useState, useEffect } from 'react'
import Card from '../components/Card/Card';
import '../index.css'


const Home = () => {

    const [pokemon, setPokemon] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();

                // Mapeando os resultados para obter apenas as URLs dos detalhes dos Pokémons
                const pokemonUrls = data.results.map(result => result.url);

                // Fazendo uma solicitação para obter os detalhes de cada Pokémon
                const pokemonDetails = await Promise.all(
                    pokemonUrls.map(async url => {
                        const response = await fetch(url);
                        if (!response.ok) {
                            throw new Error('Failed to fetch data');
                        }
                        return response.json();
                    })
                );

                // Setando a lista de Pokémons com os detalhes obtidos
                setPokemon(pokemonDetails);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <h1>Pokémon List</h1>
            <div className='main-container'>

                {pokemon && pokemon.length > 0 && pokemon.map((pokeData, index) => (
                    <Card
                        key={index}
                        name={pokeData.name}
                        id={pokeData.id}
                        type={pokeData.types[0].type.name}
                        image={pokeData.sprites.front_default}
                    />
                ))}

            </div>

        </>
    )
}

export default Home
