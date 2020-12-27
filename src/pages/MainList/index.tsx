import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

import List from './components/List';

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
    const pokemons = await api.get(`/pokemon?offset=${page}&limit=24`);
    setPokemons(
      await Promise.all(
        pokemons.data.results.map((result: any) =>
          api.get(result.url).then((Response) => Response.data)
        )
      )
    );
  }

  useEffect(() => {
    getPokemons(page * 24 || 0);
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
    history.push("/pokemons");
  };

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
          <List pokemon={pokemon} />
        ))}
      </div>
    </Container>
  );
};

export default MainList;
