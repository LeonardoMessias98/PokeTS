import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

import List from "./components/List";

import api from "../../util/api";
import pokeball from "../../assets/pokeball_icon.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

import { Container, Header, Footer } from "./styles";

interface Pokemons {
  name: string;
  species: object;
  id: number;
  sprites: object;
}

interface PokeResult {
  name: string;
  url: string;
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
        pokemons.data.results.map((result: PokeResult) =>
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
          <List key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>

      <Footer>
        <h2>
          Desenvolvido por <b>Leonardo Messias</b>
        </h2>

        <div className="social-network">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/leonardo-messias-89568818a/"
          >
            <img src={linkedin} alt="linkedin" className="linkedin" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/LeonardoMessias98"
          >
            <img src={github} alt="github" className="github" />
          </a>
        </div>
      </Footer>
    </Container>
  );
};

export default MainList;
