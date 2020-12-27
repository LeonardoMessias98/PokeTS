import React, { useEffect, useState } from "react";
import api from "../../../src/util/api";

import { Container, Header } from "./styles";

interface Pokemons {
  name: string;
  species: object;
  id: number;
  sprites: object;
}

const MainList = () => {
  const [pokemons, setPokemons] = useState<Pokemons[]>([]);
  const [page, setPage] = useState<number>(0);

  async function getPokemons(page: number) {
    setPage(page);

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
    getPokemons(0);
  }, []);

  return (
    <Container>
      <Header>
        <h1>Pokedex</h1>

        <div className="buttons">
          <button onClick={() => getPokemons(page - 20)} type="button">
            Previous
          </button>

          <button onClick={() => getPokemons(page + 20)} type="button">
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
                alt=""
              />
            </figure>

            <h4>
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </h4>

            <section className="types">
              {pokemon.types.map((type: any) => (
                <p className={`type ${type.type.name}`}>
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
