import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "antd";

import List from "./components/List";
import Triangle from "./components/Triangle";

import api from "../../util/api";
import SliderPokeTypes from "../../Components/SliderPokeTypes";
import pokeball from "../../assets/pokeball_icon.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import pokedex from "../../assets/pokedex.png";

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

const MainPage = () => {
  const history = useHistory();
  const [pokemons, setPokemons] = useState<Pokemons[]>([]);
  const [filterByPokeType, setFilterByPokeType] = useState(false);
  const [pokeType, setPokeType] = useState("default");
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1);

  async function getPokemons(page: number) {
    const pokemons = await api.get(`/pokemon?offset=0&limit=${page * 24}`);

    setPokemons(
      await Promise.all(
        pokemons.data.results.map((result: PokeResult) =>
          api.get(result.url).then((Response) => Response.data)
        )
      )
    );
  }

  useEffect(() => {
    getPokemons(1);
  }, []);

  useEffect(() => {
    async function getPokemonByType() {
      if (filterByPokeType) {
        const typeReponse = await api.get("https://pokeapi.co/api/v2/type/");

        const typeResultsFiltered = typeReponse.data.results.filter(
          (result: any) => result.name === pokeType
        );

        if (!typeResultsFiltered) return;

        const pokesByType = await api.get(typeResultsFiltered[0]?.url);

        if (pokesByType?.data?.pokemon) {
          setLoader(true);
          setPokemons(
            await Promise.all(
              pokesByType?.data?.pokemon?.map((poke: any) =>
                api.get(poke.pokemon.url).then((Response) => Response.data)
              )
            )
          );
          setLoader(false);
        }
      } else {
        getPokemons(1);
      }
    }

    getPokemonByType();
  }, [filterByPokeType, pokeType]);

  const pokeballLoader = () => {
    setLoader(true);

    setTimeout(() => {
      setLoader(false);
    }, 2000);
  };

  const navigateNext = () => {
    getPokemons(page + 1);
    setPage(page + 1);

    pokeballLoader();
  };

  const toggleActivePokedex = () => {
    setFilterByPokeType(!filterByPokeType);
    document.querySelector(".arrow-down")?.classList.toggle("hidden");
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
          <h1 onClick={navigateToMainPage}>PoKéDeX</h1>
        </div>

        <SliderPokeTypes
          loaderPokeball={pokeballLoader}
          setPokeType={setPokeType}
          filterTypeIsActive={filterByPokeType}
        />
        <Triangle />

        <div className="buttons">
          <button type="button" />
          <img
            src={pokedex}
            className="center"
            alt="pokedex"
            onClick={toggleActivePokedex}
          />
          <button type="button" />
        </div>
      </Header>

      <div className="renderList">
        <div className="content">
          {pokemons?.map((pokemon: any) => (
            <List key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>

        <Button onClick={navigateNext} loading={loader}>
          Carregar mais
        </Button>
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

export default MainPage;
