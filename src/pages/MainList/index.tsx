import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

import api from "../../util/api";
import pokeball from "../../assets/pokeball_icon.png";

import { Container, Header } from "./styles";

interface Pokemons {
  name: string;
  species: object;
  id: number;
  sprites: object;
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const MainList = () => {
  const query = useQuery();
  const history = useHistory();
  const [pokemons, setPokemons] = useState<Pokemons[]>([]);
  const [loader, setLoader] = useState(false);

  const page = Number(query.get("page"));

  async function getPokemons(page: number) {
    const pokemons = await api.get(`/pokemon?offset=${page}&limit=20`);
    setPokemons(
      await Promise.all(
        pokemons.data.results.map((result: any) =>
          api.get(result.url).then((Response) => Response.data)
        )
      )
    );
  }

  useEffect(() => {
    getPokemons(page * 20 || 0);
  }, [page]);

  const navigatePrevious = () => {
    history.push(`/pokemons?page=${page - 1}`);
    setLoader(true);
    
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  };

  const navigateNext = () => {
    history.push(`/pokemons?page=${page + 1}`);
    setLoader(true);

    setTimeout(() => {
      setLoader(false);
    }, 2000);
  };

  const navigateToMainPage = () => {
    history.push('/pokemons')
  }

  console.log("carreguei");

  return (
    <Container>
      <Header>
        <div className="title">
          <img
            src={pokeball}
            className={loader ? "loading" : ""}
            alt="pokeball"
          />
          <h1 onClick={navigateToMainPage}>Pokedex</h1>
        </div>
        <div className="buttons">
          <button onClick={navigatePrevious} type="button">
            Previous
          </button>

          <button onClick={navigateNext} type="button">
            Next
          </button>
        </div>
      </Header>

      <div className="renderList">
        {pokemons?.map((pokemon: any) => (
          <div key={pokemon.id} className="list">
            <figure>
              <img
                src={pokemon.sprites.other["official-artwork"].front_default}
                alt={pokemon.name}
              />
            </figure>

            <p className="poke_index">N° {pokemon.id}</p>

            <h4>
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </h4>

            <section className="types">
              {pokemon.types.map((type: any) => (
                <p key={type.type.name} className={`type ${type.type.name}`}>
                  {type.type.name.charAt(0).toUpperCase() +
                    type.type.name.slice(1)}
                </p>
              ))}
            </section>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default MainList;
