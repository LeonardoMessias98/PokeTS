import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import List from "./components/List";
import { Button } from 'antd';

import api from "../../util/api";
import SliderPokeTypes from "../../Components/SliderPokeTypes";
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

const MainList = () => {
  const history = useHistory();
  const [pokemons, setPokemons] = useState<Pokemons[]>([]);
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1);

  async function getPokemons(page : number) {
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

  const navigateNext = () => {
    setLoader(true);
    getPokemons(page + 1)
    setPage(page + 1);

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
          <h1 onClick={navigateToMainPage}>PoKeDeX</h1>
        </div>

        <SliderPokeTypes />

        <div className="buttons">
          <button type="button" />
          <button type="button" className="btn-center" />
          <button type="button" />
        </div>
      </Header>

      <div className="renderList">
        <div className="content">
          {pokemons?.map((pokemon: any) => (
            <List key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>

        <Button onClick={navigateNext} loading={loader}>Carregar mais</Button>
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
